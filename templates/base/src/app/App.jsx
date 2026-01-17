import { Toaster } from '@/shared/ui';
import { QueryProvider } from './providers';
import { Router } from './Router';
import { memo } from '@/shared/utils';

export const App = memo(() => {
  return (
    <QueryProvider>
      <Router />
      <Toaster />
    </QueryProvider>
  );
});
