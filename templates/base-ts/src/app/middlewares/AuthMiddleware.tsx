import { ReactNode } from 'react';
import { memo } from '@/shared/utils';

export const AuthMiddleware = memo(({ children }: { children: ReactNode }) => {
  return <>{children}</>;
});
