// Define your server actions here

"use server";

import { revalidatePath } from "next/cache";
import { insertQuestion, insertTopic, incrementVotes } from "./data";
import { redirect } from "next/navigation";

export async function addTopic(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string" || !title.trim()) {
        throw new Error("A topic title is required.");
    }

    const topic = await insertTopic({ title: title.trim() });
    revalidatePath("/ui");
    redirect(`/ui/topics/${topic.id}`);
}

export async function addQuestion(question: FormData) {
    const title = question.get("title");
    const topicId = question.get("topic_id");
    if (
        typeof title !== "string" ||
        !title.trim() ||
        typeof topicId !== "string" ||
        !topicId
    ) {
        throw new Error("A question and topic are required.");
    }

    await insertQuestion({
        title: title.trim(),
        topic_id: topicId,
        votes: 0,
    });
    revalidatePath("/ui/topics/[id]", "page");
}

export async function addVote(data: FormData) {
    const id = data.get("id");
    if (typeof id !== "string" || !id) {
        throw new Error("A question id is required.");
    }

    await incrementVotes(id);
    revalidatePath("/ui/topics/[id]", "page");
}
