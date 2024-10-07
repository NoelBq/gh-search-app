# 🚀 GH Search

GH Search is a web application built with Next.js and TailwindCSS that allows users to search for GitHub users.

## ✨ Demos

### Destop:

### Mobile:

## Live

## 🏁 Getting Started

### 📦 Install Dependencies

```zsh
yarn install
```

🖥️ Start the development server

```zsh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🐳 Docker Setup

To set up the development environment using Docker, follow these steps:

Prerequisites
Ensure you have Docker and Docker Compose installed on your machine. You can download and install them from the Docker website.

Build and Start the Development Environment
Use Docker Compose to build and start the development environment:

```
docker-compose -f docker-compose.dev.yml up --build
```

### 🚀 Deployment and Checks

Deploys are automatically handled by GitHub Actions. Before pushing, run:

```zsh
yarn build
yarn typecheck
yarn lint
```

or use all-in-one check:

```zsh
yarn build-test-typecheck
```

## 🔗 Useful Project Links

API:

- https://api.github.com/

## 📚 Primary Libraries

- NextJS - https://nextjs.org/
- TailwindCSS - https://tailwindcss.com/

### 🧱 Components

The components under `app/components` should be UI only and reusable. Each component should have its own folder with a
`index.ts`

### 🎨 Prettier

We use prettier to format the files + `@trivago/prettier-plugin-sort-imports` to automatically sort the imports.

### 🔍 Eslint

We use [AirBnb's](https://www.npmjs.com/package/eslint-config-airbnb) ESLint Typescript rules + prettier rules for linting
the project.

You can lint the whole project with `yarn lint`.
