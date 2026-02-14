import React from 'react';
import { PiCopySimpleBold, PiCheckBold } from 'react-icons/pi';
import { Flex } from '@/shared/ui/Flex';
import { Text } from '@/shared/ui/Text';
import { useToggleState } from '@/shared/hooks';
import { Box, FlexItem } from '@/shared/ui';
import { cn } from '@/shared/libs';

export const CodeLine = React.memo(({ value, isStorySection }) => {
  const [copied, toggleCopied] = useToggleState();

  const onCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    toggleCopied();
    window.setTimeout(() => toggleCopied(), 1200);
  }, [toggleCopied]);

  return (
    <Box
      radius="xl"
      padding={{ x: 4, y: 2 }}
      className={cn('ring-1 ring-border/50', isStorySection ? 'bg-surface' : 'bg-bg/80 ')}
    >
      <Flex gap={3} align="center" justify="between">
        <FlexItem className="min-w-0">
          <Text size="sm" color="ink" truncate>
            {value}
          </Text>
        </FlexItem>

        <FlexItem>
          <button
            type="button"
            onClick={onCopy}
            className="shrink-0 inline-flex size-9 items-center justify-center rounded-lg bg-black/5 text-ink hover:bg-black/10 transition-colors cursor-pointer"
            aria-label={copied ? 'Copied' : 'Copy command'}
            title={copied ? 'Copied' : 'Copy'}
          >
            {copied ? <PiCheckBold className="size-4" /> : <PiCopySimpleBold className="size-4" />}
          </button>
        </FlexItem>
      </Flex>
    </Box>
  );
});
