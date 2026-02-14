# Features Module

## Purpose

The `features` folder is the **core of the application**.

Each feature represents a **self-contained unit of business functionality** with clear ownership and boundaries.

> If a user-facing requirement exists, it belongs to a feature.

---

## Feature-First Architecture

Instead of grouping by technical layers (components, hooks, services), we group by **business capability**.

This improves:

- Scalability
- Ownership
- Discoverability
- Refactor safety

---

## Feature Structure

```txt
features/<feature-name>/
  assets/               # Feature-specific images/icons
  components/           # Reusable UI within the feature
  constants/            # Feature constants
  hooks/                # Feature-specific hooks
  pages/                # Route-level components

  <feature>.assets.js
  <feature>.context.js
  <feature>.navigations.js
  <feature>.queryKeys.js
  <feature>.routes.jsx

  index.js               # Public API of the feature
```

---

## Rules

### Feature Ownership

- A feature **owns its logic, UI, assets, and state**
- Features should not depend on other features

### Imports

```js
// ✅ Allowed
import { Button } from '@/shared/ui';
import { useAuth } from '@/features/auth';

// ❌ Not Allowed
import { useProfile } from '@/features/profile';
```

---

## Constants Policy

Feature constants include:

- Query keys
- Navigation definitions
- Route names
- Feature-level config

> Constants should stay **inside the feature** unless reused across multiple features.

---

## Contexts

- Contexts should be **feature-scoped by default**
- Global contexts require strong justification

---

## Deletion Rule

If a feature is removed:

- Delete the entire folder
- No side effects elsewhere

If deletion breaks other features, boundaries are violated.

---

## Example Feature

`sample/` is a reference feature and can be safely removed.

Use it as a blueprint for new features.
