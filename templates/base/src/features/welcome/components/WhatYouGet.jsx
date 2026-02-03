import React from 'react';
import { SOLUTIONS } from '../constants';
import { Flex, FlexItem, Text } from '@/shared/ui';

export const WhatYouGet = React.memo(() => {
  return (
    <Flex gap={2} direction="column">
      <FlexItem>
        <Text
          weight="black"
          font="plus-jakarta-sans"
          size={{ base: '2xl', md: '3xl' }}
          className="tracking-tight bg-linear-to-r from-primary to-ink bg-clip-text text-transparent"
        >
          What you get
        </Text>
      </FlexItem>

      <FlexItem className="max-w-2xl">
        <Text size="base" color="muted">
          A real-world scaffold: structure + UI foundations + modern stack.
        </Text>
      </FlexItem>
      <FlexItem>
        <Flex gap={2} className="mt-4 flex-wrap">
          {SOLUTIONS.map((x) => (
            <Flex
              gap={2}
              key={x.label}
              align="center"
              className="inline-flex items-center gap-2 rounded-full bg-surface/80 px-4 py-2"
            >
              <FlexItem>
                <Text size="sm" color="muted">
                  {x.label}:
                </Text>
              </FlexItem>
              <FlexItem>
                <Text color="ink" weight="semibold">
                  {x.value}
                </Text>
              </FlexItem>
            </Flex>
          ))}
        </Flex>
      </FlexItem>
    </Flex>
  );
});
