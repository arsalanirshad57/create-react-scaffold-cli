import { memo } from 'react';
import { Box, Button, Flex, FlexItem, Grid, Text } from '@/shared/ui';
import { FaGithub, FaLinkedin, FaNpm } from 'react-icons/fa';
import { QuickStartPanel } from './QuickStartPanel';
import { Links } from '../constants';
import { IconLink } from './IconLink';

export const Hero = memo(() => {
  return (
    <Grid
      align="start"
      gap={{ base: 10, md: 12 }}
      className="md:grid-cols-[1.25fr_0.75fr] md:gap-12"
    >
      <Flex gap={5} direction="column">
        <Box padding={{ x: 3, y: 1 }} width="fit" className="rounded-full bg-badge">
          <Flex gap={2} align="center">
            <FlexItem>
              <Box radius="full" className="size-1.5 bg-primary" />
            </FlexItem>
            <FlexItem>
              <Text size="sm" weight="semibold">
                React Scaffold
              </Text>
            </FlexItem>
          </Flex>
        </Box>

        <Flex gap={2} align="center" className="-mt-2">
          <FlexItem>
            <Text size="sm" color="muted">
              Created by
            </Text>
          </FlexItem>
          <FlexItem>
            <a
              href={Links.CreatorGithub}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink hover:text-primary transition-colors"
            >
              {Links.CreatorName}
            </a>
          </FlexItem>
        </Flex>

        <FlexItem>
          <Text
            weight="black"
            font="plus-jakarta-sans"
            size={{ base: '4xl', lg: '5xl', '2xl': '6xl' }}
            className="tracking-tight bg-linear-to-r from-ink to-primary bg-clip-text text-transparent"
          >
            Start building with React Scaffold
          </Text>
        </FlexItem>

        <FlexItem>
          <Text size="base" color="muted" className="max-w-xl text-base leading-relaxed">
            A modern, opinionated starter that keeps your codebase clean as it grows — feature-first
            structure, shared UI primitives, and best-practice tooling out of the box.
          </Text>
        </FlexItem>

        <FlexItem>
          <Text size="sm" color="muted" className="max-w-xl">
            This is the default starter page. Replace it with your product UI when you’re ready.
          </Text>
        </FlexItem>

        <FlexItem>
          <Flex gap={3} direction={{ base: 'column', md: 'row' }} className="mt-2">
            <FlexItem>
              <Button
                className="rounded-full"
                onClick={() => window.open(Links.AppGithub, '_blank', 'noopener,noreferrer')}
              >
                Open Project Repo
              </Button>
            </FlexItem>

            <FlexItem>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => window.open(Links.NpmPackage, '_blank', 'noopener,noreferrer')}
              >
                View NPM Package
              </Button>
            </FlexItem>
          </Flex>
        </FlexItem>

        <FlexItem>
          <Flex gap={2} align="center">
            <FlexItem>
              <IconLink
                href={Links.AppGithub}
                label="App Repo"
                icon={<FaGithub className="size-4" />}
              />
            </FlexItem>
            <FlexItem>
              <IconLink
                href={Links.CliGithub}
                label="CLI Repo"
                icon={<FaGithub className="size-4" />}
              />
            </FlexItem>
            <FlexItem>
              <IconLink href={Links.NpmPackage} label="NPM" icon={<FaNpm className="size-4" />} />
            </FlexItem>

            <>
              <span className="text-border -mt-1">•</span>
              <FlexItem>
                <IconLink
                  href={Links.CreatorLinkedIn}
                  label="Creator"
                  icon={<FaLinkedin className="size-4" />}
                />
              </FlexItem>
            </>
          </Flex>
        </FlexItem>
      </Flex>

      <QuickStartPanel />
    </Grid>
  );
});
