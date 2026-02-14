import { memo } from 'react';
import { Box } from '@/shared/ui/Box';
import { cn } from '@/shared/libs';

interface RingSoftProps {
  className?: string;
  size: string | number;
}

export const RingSoft = memo(({ className, size }: RingSoftProps) => {
  return (
    <Box
      className={cn('absolute rounded-full', className)}
      style={{
        width: size,
        height: size,
        border: '1px solid rgba(52, 82, 255, 0.22)',
      }}
    />
  );
});
