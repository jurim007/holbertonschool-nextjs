import bcrypt from "bcryptjs";
import { db, type VercelPoolClient } from "@vercel/postgres";
import { users, topics, questions } from "@/lib/placeholder-data";

type DatabaseClient = VercelPoolClient;

async function seedUsers(client: DatabaseClient) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedTopics(client: DatabaseClient) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS topics (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    );
  `;

  const insertedTopics = await Promise.all(
    topics.map(
      (topic) => client.sql`
        INSERT INTO topics (id, title)
        VALUES (${topic.id}, ${topic.title})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedTopics;
}

async function seedQuestions(client: DatabaseClient) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS questions (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      topic_id UUID NOT NULL,
      votes INT NOT NULL,
      FOREIGN KEY (topic_id) REFERENCES topics(id)
    );
  `;

  const insertedQuestions = await Promise.all(
    questions.map(
      (question) => client.sql`
        INSERT INTO questions (id, title, topic_id, votes)
        VALUES (${question.id}, ${question.title}, ${question.topic}, ${question.votes})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedQuestions;
}

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return Response.json(
      { error: "Seeding is disabled in production." },
      { status: 404 }
    );
  }

  let client: DatabaseClient | undefined;
  try {
    client = await db.connect();
    await client.sql`BEGIN`;
    await seedUsers(client);
    await seedTopics(client);
    await seedQuestions(client);
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    console.error("Database seed failed:", error);
    if (client) {
      try {
        await client.sql`ROLLBACK`;
      } catch (rollbackError) {
        console.error("Database seed rollback failed:", rollbackError);
      }
    }
    return Response.json({ error: "Database seed failed." }, { status: 500 });
  } finally {
    client?.release();
  }
}
