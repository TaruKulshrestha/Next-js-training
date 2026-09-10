# Next.js training

This repository holds **two independent Next.js projects**. They live in the same repo only for training. They do not share dependencies, routes, or a database.

| Folder | Project |
| --- | --- |
| Repository root (`src/`) | Corp styling app (`corp`) |
| [`snippets/`](./snippets) | Code snippets app with Prisma and server actions |

Each app has its own `package.json`. Install and run them separately.

## Corp app (root)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Snippets app

```bash
cd snippets
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Open the URL printed in the terminal (usually [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) if the corp app is already using 3000).
