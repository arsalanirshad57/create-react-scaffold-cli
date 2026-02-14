import { memo } from 'react';
import { Box, Flex, FlexItem, Text } from '@/shared/ui';
import { Links } from '../constants';
import { Divider } from './Divider';

export const Footer = memo(() => {
  return (
    <Box className="mt-12 pt-8">
      <Divider className="mb-6" />

      <Flex
        gap={4}
        align={{ md: 'center' }}
        justify={{ md: 'between' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <FlexItem>
          <Text size="sm" color="muted">
            <span className="font-semibold text-ink">React Scaffold</span>
            <>
              <span className="mx-2">•</span>
              Created by{' '}
              <a
                href={Links.CreatorGithub}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink hover:text-primary transition-colors"
              >
                {Links.CreatorName}
              </a>
            </>
          </Text>
        </FlexItem>

        <FlexItem>
          <Flex gap={5} className="flex-wrap text-sm font-medium">
            <a
              className="text-muted hover:text-primary"
              href={Links.AppGithub}
              target="_blank"
              rel="noreferrer"
            >
              Project Repo
            </a>
            <a
              className="text-muted hover:text-primary"
              href={Links.CliGithub}
              target="_blank"
              rel="noreferrer"
            >
              CLI Repo
            </a>
            <a
              className="text-muted hover:text-primary"
              href={Links.NpmPackage}
              target="_blank"
              rel="noreferrer"
            >
              NPM Package
            </a>

            <>
              <span className="text-border">|</span>
              <a
                className="text-muted hover:text-primary"
                href={Links.CreatorLinkedIn}
                target="_blank"
                rel="noreferrer"
              >
                Creator
              </a>
            </>
          </Flex>
        </FlexItem>
      </Flex>
    </Box>
  );
});
