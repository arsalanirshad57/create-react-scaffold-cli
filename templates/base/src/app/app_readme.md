# App Module

## Purpose
The `app` layer is responsible for **bootstrapping the application**. It wires together global providers, routing, and application-level configuration.

This folder should remain **small, boring, and stable**.

> If something changes frequently, it probably does NOT belong here.

---

## Responsibilities

The `app` module may contain:

- Application entry point (`main.jsx`)
- Root component (`App.jsx`)
- Global providers (React Query, Theme, etc.)
- Application router
- Global middlewares
- One-time initialization logic

---

## Folder Structure

```txt
app/
  middlewares/   # Global middlewares (logging, guards, etc.)
  providers/     # Global providers (QueryProvider, ThemeProvider)
  App.jsx        # Root component
  Router.jsx     # App-level router
  main.jsx       # Application entry
  index.css      # Global styles
```

---

## Rules

### ✅ Allowed
- Global providers
- App-wide configuration
- Router composition

### ❌ Not Allowed
- Feature-specific logic
- Business rules
- UI components
- API calls
- Feature contexts

---

## Import Rules

```js
// ✅ Allowed
import { QueryProvider } from './providers';
import { AppRouter } from './Router';

// ❌ Not Allowed
import { LoginForm } from '@/features/auth/components';
```

---

## Philosophy

The `app` layer is a **composition root**, not a feature owner.

Keep it minimal.
Keep it predictable.

