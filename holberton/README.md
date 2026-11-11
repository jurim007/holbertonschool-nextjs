# Holberton Q&A

A Next.js app for browsing topics, asking questions, and voting on questions.

## Setup

Run these commands from the `holberton/` directory:

```bash
npm install
cp .env.example .env.local
```

Set `POSTGRES_URL` in `.env.local` to a PostgreSQL connection string and set
`AUTH_SECRET` to a random secret (for example, generate one with
`openssl rand -base64 32`). Keep `.env.local` private.

Start the app:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). Before signing in for the
first time, seed the local database with:

```bash
curl -X POST http://localhost:3000/api/seed
```

The seed endpoint is disabled in production. It creates a demo user
(`user@atlasmail.com`, password `123456`) and example topics/questions; do not
use those credentials or seed data in a public deployment.

## Checks

```bash
npm run lint
npm run build
```
