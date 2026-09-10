# Snippets

Standalone Next.js app for creating and viewing code snippets. It is not wired to the corp app in the repo root.

## Setup

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Create a `.env` file with:

```
DATABASE_URL="file:./dev.db"
```
