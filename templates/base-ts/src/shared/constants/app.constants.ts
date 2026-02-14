export const ENV = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL as string,
};

export const Layouts = {
  Dashboard: 'dashboard',
  Auth: 'auth',
  None: 'none',
} as const;

export type LayoutType = typeof Layouts[keyof typeof Layouts];
