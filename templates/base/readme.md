# React Feature‑First Scaffold

## Purpose

This repository is an **internal, opinionated React scaffold** designed for large-scale frontend applications. It enforces a **feature‑first architecture**, clear ownership boundaries, and predictable patterns so teams can scale safely without architectural drift.

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

## Installation (WIP)

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

## Philosophy

> **Architecture is a product feature.**

This scaffold exists to reduce decision fatigue, prevent architectural erosion, and help teams move faster with confidence.

---

## Ownership

This scaffold is maintained internally and should be treated as a **living standard**. Changes must be intentional, documented, and agreed upon by the frontend team.
