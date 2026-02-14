import React from 'react';
import { Text } from '@/shared/ui';

export const IconLink = React.memo(({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
    >
      <span className="text-primary">{icon}</span>
      <Text size="sm" className="leading-none">
        {label}
      </Text>
    </a>
  );
});
