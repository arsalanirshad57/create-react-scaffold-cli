import { memo, ReactNode } from 'react';
import { Text } from '@/shared/ui';

interface IconLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export const IconLink = memo(({ href, icon, label }: IconLinkProps) => {
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
