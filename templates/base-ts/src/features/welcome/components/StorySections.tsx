
import { Divider } from './Divider';
import { CodeLine } from './CodeLine';
import { Box, Flex, FlexItem, Grid, GridItem, Text } from '@/shared/ui';
import { Commands } from '../constants';

function Block({ title, body }: { title: string; body: string }) {
  return (
    <Box>
      <Text className="text-sm font-bold tracking-tight">{title}</Text>
      <Text className="mt-2 text-muted leading-relaxed">{body}</Text>
    </Box>
  );
}

export function StorySections() {
  return (
    <Grid gap={{ base: 10, md: 12 }} columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Flex gap={2} direction="column">
          <FlexItem>
            <Text
              weight="black"
              font="plus-jakarta-sans"
              size={{ base: '2xl', md: '3xl' }}
              className="tracking-tight bg-linear-to-r from-primary to-ink bg-clip-text text-transparent"
            >
              Why this exists
            </Text>
          </FlexItem>

          <FlexItem className="max-w-2xl">
            <Text size="base" color="muted">
              Less starter bloat, more clarity. You get patterns that keep apps maintainable as
              teams grow.
            </Text>
          </FlexItem>
        </Flex>
      </GridItem>
      <GridItem className="space-y-7">
        <Block
          title="Project purpose"
          body="React Scaffold helps teams start real apps fast—with structure, shared UI primitives, and a clean foundation for long-term maintainability."
        />
        <Divider />
        <Block
          title="Problem it solves"
          body="Most starters don’t scale. This scaffold enforces patterns so features stay isolated, UI stays consistent, and refactoring remains safe."
        />
        <Divider />
        <Box>
          <Text size="sm" className="font-bold tracking-tight">
            How to start
          </Text>
          <Box className="mt-3 space-y-3">
            <CodeLine isStorySection value={Commands.Scaffold} />
            <CodeLine isStorySection value={Commands.Run} />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
