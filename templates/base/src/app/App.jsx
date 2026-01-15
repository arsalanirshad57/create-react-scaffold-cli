import { Toaster } from '@/shared/ui';
import { QueryProvider } from './providers';

function App({ children }) {
  return (
    <QueryProvider>
      {children}
      <Toaster />
    </QueryProvider>
  );
}

export default App;
