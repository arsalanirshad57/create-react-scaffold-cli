import { memo } from 'react';
import { Box } from '@/shared/ui';
import { Divider, Footer, Hero, StorySections, WhatYouGet } from '../components';

const WelcomePage = memo(() => {
  return (
    <Box className="min-h-screen bg-bg text-ink">
      <Box
        className="mx-auto max-w-6xl"
        padding={{ x: { base: 4, md: 6 }, y: { base: 10, md: 14 } }}
      >
        <Hero />

        <Divider className="my-10 md:my-12" />

        <WhatYouGet />

        <Divider className="my-10 md:my-12" />

        <StorySections />

        <Footer />
      </Box>
    </Box>
  );
});

export default WelcomePage;
