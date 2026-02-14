import React from 'react';
import { Box, Flex, FlexItem, Text } from '@/shared/ui';
import { RingSoft } from './RingSoft';
import { CodeLine } from './CodeLine';
import { Commands } from '../constants';

function StepLight({ label, children }) {
  return (
    <Box>
      <Text className="text-sm font-semibold text-ink">{label}</Text>
      <Box className="mt-2">{children}</Box>
    </Box>
  );
}

export const QuickStartPanel = React.memo(() => {
  return (
    <Box className="relative overflow-hidden rounded-2xl bg-surface/70 p-6 md:p-7 ring-1 ring-border">
      <Box className="pointer-events-none absolute inset-0 opacity-100">
        <RingSoft className="right-[-7rem] top-[-6rem]" size="22rem" />
        <RingSoft className="right-[-5rem] top-[9rem]" size="14rem" />
        <RingSoft className="right-[-3.5rem] top-[16rem]" size="6rem" />
      </Box>

      <Box className="relative z-10 space-y-6">
        <Flex gap={1} direction="column">
          <FlexItem>
            <Text
              size="base"
              weight="bold"
              font="plus-jakarta-sans"
              className="tracking-tight bg-linear-to-r from-primary to-ink bg-clip-text text-transparent"
            >
              Quick start
            </Text>
          </FlexItem>
          <FlexItem>
            <Text size="sm" color="muted">
              Create an app in seconds — clean architecture, ready to scale.
            </Text>
          </FlexItem>
        </Flex>

        <Flex gap={4} direction="column">
          <FlexItem>
            <StepLight label="1) Scaffold">
              <CodeLine value={Commands.Scaffold} variant="light" />
            </StepLight>
          </FlexItem>
          <FlexItem>
            <StepLight label="2) Run">
              <CodeLine value={Commands.Run} variant="light" />
            </StepLight>
          </FlexItem>
        </Flex>

        <Text size="sm" color="muted">
          Tip: add your first feature inside your feature modules and delete this page when ready.
        </Text>
      </Box>
    </Box>
  );
});
