import { sampleRoutes } from '@/features/sample';
import { welcomeRoutes } from '@/features/welcome';
import { AppRoute } from '@/shared/types/navigation';

export const featureRoutes: AppRoute[] = [
  ...sampleRoutes,
  ...welcomeRoutes,
  // ...otherFeatureRoutes
];
