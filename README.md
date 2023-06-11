# Dashboard Project

For this project I am using Next JS 13 with TypeScript and Tailwind CSS with additional Sass for styling. Furthermore, Prisma will be used to manage server logic (database)

## Getting Started

Created new directory `dashboard` in path `/Users/philipsoderbom/code/webdev/react/` in which the Next JS application is created:

```
mkdir dashboard
cd dashboard

%%% Create next application in current directory
npx create-next-app@latest .

%%% Install prisma
npm install prisma --save-dev

%%% Finally, set up Prisma with the init command
npx prisma init --datasource-provider sqlite
```

### Initialize git version control with GitHub

Then, use the following commands to set everything up, and complete first staging and commit. Then push for the first time to the remote GitHub repo.

- `git branch -M main`
- `git remote add origin <remote_repo_url>`
- `git add .`
- `git commit -m "first commit"`
- `git push -u origin main`

From here on, staging, commiting and pushing is done as usual.

Initialize git manually (when not using npx)

Create new folder and change to that directory, then:

- `git init`
- `git branch -M main`
- `git remote add origin <remote_repo_url>`
- `git add .`
- `git commit -m "first commit"`
- `git push -u origin main`

## Using Prisma

Define model in `schema.prisma`:

```
model Todo {
  id        String   @id @default(uuid())
  title     String
  complete  Boolean
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Run a migration to create your SQLite database tables with Prisma Migrate:
`npx prisma migrate dev --name init`

## Adding React Icons

`npm i react-icons`

## Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
