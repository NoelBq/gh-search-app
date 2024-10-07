# 🚀 GH Search

GH Search is a web application built with Next.js and TailwindCSS that allows users to search for GitHub users.

## ✨ Demos

### Destop:

<img width="1440" alt="Screenshot 2024-10-07 at 1 13 13 AM" src="https://github.com/user-attachments/assets/4e211b49-d7d8-45bb-b725-32212538ef64">

<img width="1438" alt="Screenshot 2024-10-07 at 1 26 21 AM" src="https://github.com/user-attachments/assets/d6200f46-ba0d-41bf-b20c-5bdc729956f8">

### Mobile:

<img width="313" alt="Screenshot 2024-10-07 at 1 26 02 AM" src="https://github.com/user-attachments/assets/5daac5d2-fd90-4547-be18-88e294a627fc">
  
<img width="337" alt="Screenshot 2024-10-07 at 1 25 38 AM" src="https://github.com/user-attachments/assets/ead1af59-cd33-489e-9144-ec559741f56d">

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
