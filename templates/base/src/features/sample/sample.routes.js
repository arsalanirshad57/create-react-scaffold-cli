import React from 'react';
import { Layouts } from '@/shared/constants';
import { SampleNavigation } from './constants/sample.navigations';
import { SamplePage } from './pages';

export const sampleRoutes = [
  {
    path: SampleNavigation.Sample,
    element: <SamplePage />,
    protected: true,
    layout: Layouts.None,
  },
];
