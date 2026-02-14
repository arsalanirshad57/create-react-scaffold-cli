import { Layouts } from '@/shared/constants';
import { SamplePage } from './pages';
import { SampleNavigation } from './constants';
import { AppRoute } from '@/shared/types/navigation';

export const sampleRoutes: AppRoute[] = [
  {
    path: SampleNavigation.Sample,
    element: SamplePage,
    protected: true,
    layout: Layouts.None,
  },
];
