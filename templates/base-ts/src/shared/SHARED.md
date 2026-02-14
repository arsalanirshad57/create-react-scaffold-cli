# Shared Module

## Purpose

The `shared` folder contains **cross-feature reusable code**.

It exists to prevent duplication — not to become a dumping ground.

> Shared code must earn its place.

---

## What Belongs in Shared

Only code that is:

- Used by **multiple features**
- **Stateless or generic**
- Independent of business rules

---

## Folder Structure

```txt
shared/
  assets/      # Global images/icons
  constants/   # App-wide constants
  contexts/    # Truly global contexts
  hooks/       # Reusable generic hooks
  layouts/     # Application layouts
  libs/        # Third-party wrappers (axios, query)
  theme/       # Theme configuration
  ui/          # Design system components
  utils/       # Pure utility functions
```

---

## Rules

### ✅ Allowed

- UI primitives (Button, Modal)
- Generic hooks (useDebounce)
- Axios/query setup
- Theme tokens

### ❌ Not Allowed

- Feature logic
- Business rules
- Feature-specific constants
- Feature state

---

## Import Rules

```js
// ✅ Allowed
import { axios } from '@/shared/libs';
import { cn } from '@/shared/utils';

// ❌ Not Allowed
import { authQueryKeys } from '@/features/auth';
```

---

## Constants Policy

Shared constants should be:

- Truly global
- Stable
- Rarely changed

Examples:

- Pagination defaults
- Environment keys
- Generic route params

---

## Contexts

Global contexts should be rare.

Before adding one, ask:

1. Is this needed by multiple unrelated features?
2. Can this live inside a feature instead?

If unsure — **do not add it here**.

---

## Philosophy

Shared code is a **dependency magnet**.

The smaller it stays, the healthier the system remains.
