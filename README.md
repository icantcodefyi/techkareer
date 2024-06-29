# TechKareer

Welcome to TechKareer, the ultimate tech opportunities aggregator! Find your next gig, internship, or job right here on our platform.

## Tech Stack

Our platform is built with the following technologies:

- Next.js
- TypeScript
- Postgres
- Tailwind CSS

## Local Development Instructions

To get started with local development, follow these simple steps:

1. Navigate to the web-app directory:

   ```
   cd web-app
   ```

2. Copy `.env.example` to `.env.local` file.

   ```
   cp .env.example .env.local
   ```

3. Setup environment variables before running the dev server.

4. Install dependencies:
   ```
   npm install
   ```
5. Start the development server:
   ```
   npm run dev
   ```

## Settng up new environment variables in `app` directory

1. Go to `app` directory

2. Add new environment variable in `.env.local` and `.env.example`
3. got to `src/env.ts`
4. Add the environment variable validation in server or client based on the type of the variable.
5. Add you variable configuration in `runtimeEnv`.
6. Yo're all set!

# Contributing

We welcome contributions from the community! However, to ensure a smooth review process and maintain the quality of our codebase, please follow these guidelines:

1. Open PRs to the development branch: All pull requests should be opened against the development branch. Directly opening PRs to the main branch will result in immediate rejection.
2. When opening issues or pull requests, Attach images or videos to provide additional context or illustrate the problem you're encountering

Thank you for your interest in contributing to TechKareer!
