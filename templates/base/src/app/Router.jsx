import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { featureRoutes } from './routes.registry';
import { AuthMiddleware } from './middlewares';
import { Layouts } from '@/shared/constants';
import { memo } from '@/shared/utils';

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

          let element = <Layout>{route.element}</Layout>;

          if (route.protected) {
            element = (
              <AuthMiddleware>
                <Layout>{route.element}</Layout>
              </AuthMiddleware>
            );
          }

          return <Route key={index} path={route.path} element={element} />;
        })}

        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
});
