# React Feature‑First Scaffold

## Purpose

This repository is an **opinionated React scaffold** designed for large-scale frontend applications. It enforces a **feature‑first architecture**, clear ownership boundaries, and predictable patterns so teams can scale safely without architectural drift.

This scaffold will later be distributed via an internal **NPM CLI** (similar to `create-react-app`) to bootstrap projects with best practices preconfigured.

---

## Core Principles

- **Feature-first, not layer-first**
- **Explicit boundaries** between app / features / shared
- **Locality of logic** (keep things close to where they are used)
- **Predictable imports** and naming conventions
- **Low cognitive load** for new developers

---

## Tech Stack

### Runtime

- **React 19** – UI layer
- **Vite** – fast dev & build tooling

### Styling

- **Tailwind CSS** – utility-first styling
- **tailwind-merge** – class conflict resolution
- **clsx** – conditional class composition

### Data & State

- **@tanstack/react-query** – server-state management
- **Axios** – HTTP client

### UI Utilities

- **Radix UI** – accessible headless components
- **react-hot-toast** – notifications
- **react-icons** – icon system

### Code Quality

- **ESLint** – linting with strict rules
- **Prettier** – formatting
- **Husky + lint-staged** – pre-commit enforcement

---

## High-Level Folder Structure

```txt
src/
  app/        # Application bootstrap & global wiring
  features/   # Business features (isolated, self-contained)
  shared/     # Cross-feature reusable modules
```

Each top-level folder has **its own README** explaining rules and responsibilities.

---

## Installation

> CLI installation instructions.

```bash
npx create-react-scaffold-cli

```

---

## Documentation Index

- `src/app/README.md` – Application bootstrap & providers
- `src/features/README.md` – Feature architecture rules
- `src/shared/README.md` – Shared modules & reuse policy

---

## Set Up

### Install dependencies

```bash
npm i
```

### Run application

---

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Lint application

```
npm run lint
```

### Prettify code

```
npm run prettier
```

### Build application

```
npm run build
```

### Preview application

```
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Learning Resources

## Tailwind CSS

To learn more about `Tailwind CSS`, take a look at the following resources:

- [Tailwind ](https://tailwindcss.com) - Tailwind documentation and related resources.

## Framer Motion

To learn more about `Framer Motion`, take a look at the following resources:

- [Framer Motion](https://www.framer.com/motion) - Framer Motion documentation and related resources.

## React Query

To learn more about `TanStack Query`, take a look at the following resources:

- [TanStack Query](https://tanstack.com/query/latest) - React Query documentation and related resources.

## Nuqs

To learn more about `Nuqs`, take a look at the following resources:

- [Nuqs](https://nuqs.dev/) - React Query documentation and related resources.

## Philosophy

> **Architecture is a product feature.**

This scaffold exists to reduce decision fatigue, prevent architectural erosion, and help teams move faster with confidence.

---

## Ownership

This scaffold is maintained internally and should be treated as a **living standard**. Changes must be intentional, documented, and agreed upon by the frontend team.
