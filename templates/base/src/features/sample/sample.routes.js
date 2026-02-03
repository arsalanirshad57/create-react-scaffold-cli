import { Layouts } from '@/shared/constants';
import { SamplePage } from './pages';
import { SampleNavigation } from './constants';

export const sampleRoutes = [
  {
    path: SampleNavigation.Sample,
    element: SamplePage,
    protected: true,
    layout: Layouts.None,
  },
];
