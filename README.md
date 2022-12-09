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
📁src
  |--📁pages // directory containing all the page components
  |  |--📁home
  |     |--index.ts
  |     |--⚛️home.tsx
  |     |--📁components // directory containing all the components that are only used in the home page
  |     |  |--⚛️project-stats.tsx
  |     |--📁queries // directory containing all the queries used only in the home page
  |     |  |--projects.ts
  |     |--📁hooks // directory containing all the hooks used only in the home page
  |        |--⚛️use-project-data.ts
  |
  |--📁components // directory containing all the components that are using accross multiple pages or multiple components
  |  |--📁app-shell
  |     |--index.ts
  |     |--app-shell.tsx
  |     |--📁components // directory containing all the components used in app-shell only
  |         |--app-shell-link.tsx
  |
  |--📁hooks // directory containing all the hooks used across multiple pages or components
  |  |--⚛️use-auth.ts
  |--📁utils // directory containing all the helper functions used across multiple pages and components
     |--user.ts
```

### Project Scaffolding

This project uses [`hygen`](https://www.hygen.io/) for generating code using templates.

**Make sure to provide all the names in kebab-case**.

### Scaffolding Page

- `npx hygen page new --name <page-name>` - It would create the page directory (`src/pages/page-name`) with `index.ts` and `page-name.tsx` files.

  ##### Parameters

  | field  | description                                           |
  | ------ | ----------------------------------------------------- |
  | `name` | Name of the page. Make sure to use _kebab-case_ name. |

- `npx hygen page sub-component --name <component-name> --parent <page-name>` - It would create the `component-name.tsx` inside `src/pages/page-name/components/` directory.

  ##### Parameters

  | field    | description                                                |
  | -------- | ---------------------------------------------------------- |
  | `name`   | Name of the Component.                                     |
  | `parent` | Name of the page where this sub-component is to be created |

- `npx hygen page hook --name <hook-name> --parent <page-name>` - It would create `use-hook-name.tsx` inside `src/pages/page-name/hooks/` directory.

  ##### Parameters

  | field    | description                                                                                                                                     |
  | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | `name`   | Name of the **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically. |
  | `parent` | Name of the page where this sub-component is to be created                                                                                      |

### Scaffolding Components

- `npx hygen component new --name <component-name>` - It would create the component directory (`src/components/component-name`) with `index.ts` and `component-name.tsx` files.

  ##### Parameters

  | field  | description                                           |
  | ------ | ----------------------------------------------------- |
  | `name` | Name of the page. Make sure to use _kebab-case_ name. |

- `npx hygen component sub-component --name <component-name> --parent <component-name>` - It would create the `component-name.tsx` inside `src/components/component-name/components/` directory.

  ##### Parameters

  | field    | description                                                     |
  | -------- | --------------------------------------------------------------- |
  | `name`   | Name of the Component.                                          |
  | `parent` | Name of the component where this sub-component is to be created |

### Scaffolding Hooks

- `npx hygen hook new --name <hook-name>` - It would create `use-hook-name.tsx` inside `src/hooks/` directory. **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically.

  ##### Parameters

  | field  | description                                                                                                                                     |
  | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | `name` | Name of the **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically. |

## Backend Integration

### Enviroment Variables

```
VITE_API_BASE_URL=<base-api-end-point>
VITE_BEARER_TOKEN_KEY=<key-name-for-storing-authentication-token-in-local-storage>
```

For example if using the [Strapi](https://strapi.io/), you can use the environment variables such as

```env
VITE_API_BASE_URL=http://localhost:1337/api
VITE_BEARER_TOKEN_KEY=my-app-bearer-token
```

### API

This starter project implements basic authentication. This assumes that we have 2 API endpoints

- `/auth/local` - Authentication API

  ##### Request Body

  | field        | type     | description       |
  | ------------ | -------- | ----------------- |
  | `identifier` | `string` | email or username |
  | `password`   | `string` | password          |

  ##### Response

  ```json
  {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwNTg4MTczLCJleHAiOjE2NzMxODAxNzN9.xNbyaxTNHunIeOzcfV-7nF8aAOjQKXm3NGO40ozw2Ro",
    "user": {
      "id": 1,
      "username": "abinash",
      "email": "abinash@coinfeeds.io",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2022-12-09T07:59:32.460Z",
      "updatedAt": "2022-12-09T07:59:32.460Z"
    }
  }
  ```

- `/users/me` - API to fetch user information

  ##### Response

  ```json
  {
    "id": 1,
    "username": "abinash",
    "email": "abinash@coinfeeds.io",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2022-12-09T07:59:32.460Z",
    "updatedAt": "2022-12-09T07:59:32.460Z"
  }
  ```
