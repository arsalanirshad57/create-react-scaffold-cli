import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { featureRoutes } from './routes.registry';
import { AuthMiddleware } from './middlewares';
import { Layouts } from '@/shared/constants';
import { memo } from '@/shared/utils';
import { ComponentType, ReactNode } from 'react';

const layoutMap: Record<string, ComponentType<{ children: ReactNode }> | null> = {
  dashboard: null, // Placeholder, should be DashboardLayout
  none: ({ children }) => <>{children}</>,
};

export const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        {featureRoutes.map((route, index) => {
          const Layout = layoutMap[route.layout ?? Layouts.None];
          const Page = route.element as ComponentType;

          if (!Layout) {
             return <Route key={index} path={route.path} element={<Page />} />;
          }

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
