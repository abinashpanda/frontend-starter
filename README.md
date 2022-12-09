# frontend-starter

Frontend starter kit for building web applications with [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/).

## Tech Stack

### Libraries Used

- [`constate`](https://www.npmjs.com/package/constate) - Library to uplift local state to global using React Context with minimal effort.
- [`react-query`](https://tanstack.com/query/v4) - Library to manage data fethcing (caching and updating) states
- [`antd`](https://ant.design/) - UI Library
- [`tailwindcss`](https://tailwindcss.com/) - Utility-first CSS framework
- [`react-router-dom`](https://reactrouter.com/) - Router
- [`axios`](https://www.npmjs.com/package/axios) - Promise based HTTP client

### Code Quality Tools

- [`eslint`](https://eslint.org/) - Linter. This project uses a combination of [Javascript Standard Style](https://standardjs.com/) with some additional rules.
- [`prettier`](https://prettier.io/) - Code formatter
- [`husky`](https://typicode.github.io/husky/) - Git hooks for consistent code

## Scripts

### Installation

```
npm install
```

or

```
yarn install
```

### NPM Scripts

- `npm run dev` or `yarn dev` - Run dev server
- `npm run build` or `yarn build` - Compiles and bundles the application
- `npm run lint` or `yarn lint` - Validate the code using ESLint
- `npm run format` or `yarn format` - Format code using Prettier

## Project Setup

## Directory Structure

The codebase is divided into multiple folders

- `pages` - directory containing all the components for each page
- `components` - directory containing all the components used across multiple pages
- `hooks` - directory containing all the hooks used across multiple pages and components
- `utils` - directory containing all the helper (or utility) functions used across multiple pages and components
- `queries` - directory containing all the queries (query and mutation functions) used across multiple pages and components

**The core philosophy is directory structure is colocation.** All the components, queries, hooks, utils, etc used in a particular page should be present with the page directory. Once the component or hook or util or query is used accross multiple pages it should be uplifted to its corresponding directory.

```
src
  |--pages // directory containing all the page components
  |  |--home
  |     |--index.ts
  |     |--home.tsx
  |     |--components // directory containing all the components that are only used in the home page
  |     |  |--project-stats.tsx
  |     |--queries // directory containing all the queries used only in the home page
  |     |  |--projects.ts
  |     |--hooks // directory containing all the hooks used only in the home page
  |        |--use-project-data.ts
  |
  |--components // directory containing all the components that are using accross multiple pages or multiple components
  |  |--app-shell
  |     |--index.ts
  |     |--app-shell.tsx
  |     |--components // directory containing all the components used in app-shell only
  |         |--app-shell-link.tsx
  |
  |--hooks // directory containing all the hooks used across multiple pages or components
  |  |--use-auth.ts
  |--utils // directory containing all the helper functions used across multiple pages and components
     |--user.ts
```
