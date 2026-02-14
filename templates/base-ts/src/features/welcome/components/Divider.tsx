import { memo } from 'react';
import { cn } from '@/shared/libs';
import { Box } from '@/shared/ui';

interface DividerProps {
  className?: string;
}

export const Divider = memo(({ className = '' }: DividerProps) => {
  return <Box className={cn('h-px w-full bg-border/70', className)} />;
});
