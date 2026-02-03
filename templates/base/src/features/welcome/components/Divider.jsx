import React from 'react';
import { cn } from '@/shared/libs';
import { Box } from '@/shared/ui';

export const Divider = React.memo(({ className = '' }) => {
  return <Box className={cn('h-px w-full bg-border/70', className)} />;
});
