export type Breakpoint = 'base' | 'md' | 'lg' | 'xl' | '2xl';

export type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

export type Axis = 'x' | 'y';
