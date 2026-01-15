# create-react-scaffold-cli

A CLI to scaffold a **feature-first React application** with clear boundaries and long-term maintainability.

This scaffold enforces a simple rule:

> **Business logic lives in features.  
> Reusable primitives live in shared.  
> App only wires things together.**

---

## Why this exists

Most React projects slowly degrade into:

- unclear ownership
- massive `components/` folders
- bloated `shared/` directories
- fragile cross-feature imports

This scaffold exists to:

- enforce **feature ownership**
- make refactoring safe
- allow deleting features without breaking the app
- keep architecture understandable as the app grows

---

## Quick Start

```bash
npx create-react-scaffold-cli
```
