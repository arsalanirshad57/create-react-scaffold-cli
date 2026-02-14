import { ComponentType, ReactNode } from 'react';

export interface AppRoute {
  path: string;
  element: ComponentType<any> | ReactNode;
  protected?: boolean;
  layout?: string;
  children?: AppRoute[];
}
