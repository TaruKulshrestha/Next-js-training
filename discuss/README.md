# Discuss

A Reddit-style discussion app built with Next.js, NextUI, Prisma (SQLite), and NextAuth (GitHub OAuth).

## Setup

```bash
npm install
cp .env.example .env
cp .env.example .env.local
npx prisma migrate dev
npm run dev
```

### Environment

- `DATABASE_URL` — SQLite path (default `file:./dev.db`)
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` — from a GitHub OAuth App
- `AUTH_SECRET` — any long random string

GitHub OAuth App settings:

- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
