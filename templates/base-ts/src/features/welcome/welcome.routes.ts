import { AppRoute } from '@/shared/types/navigation';
import { Layouts } from '@/shared/constants';
import { WelcomePage } from './pages';
import { WelcomeNavigation } from './constants';

export const welcomeRoutes: AppRoute[] = [
  {
    path: WelcomeNavigation.Root,
    element: WelcomePage,
    protected: false,
    layout: Layouts.None,
  },
];
