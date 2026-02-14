import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { featureRoutes } from './routes.registry';
import { AuthMiddleware } from './middlewares';
import { Layouts } from '@/shared/constants';
import { memo } from '@/shared/utils';
import React from 'react';

const layoutMap = {
  dashboard: null,
  none: ({ children }) => children,
};

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        {featureRoutes.map((route, index) => {
          const Layout = layoutMap[route.layout ?? Layouts.None];
          const Page = route.element;

          let element = (
            <Layout>
              <Page />
            </Layout>
          );

          if (route.protected) {
            element = (
              <AuthMiddleware>
                <Layout>
                  <Page />
                </Layout>
              </AuthMiddleware>
            );
          }

          return <Route key={index} path={route.path} element={element} />;
        })}

        <Route path="/*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
});
