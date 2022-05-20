import React from 'react';

const LayoutBackground = React.memo(React.lazy(() => import('views/core/LayoutBackground')));
const LayoutTop = React.memo(React.lazy(() => import('views/core/LayoutTop')));
const LayoutMain = React.memo(React.lazy(() => import('views/core/LayoutTop')));
const LayoutFooter = React.memo(React.lazy(() => import('views/core/LayoutTop')));
const AppRoutes = React.memo(React.lazy(() => import('app/AppRoutes')));

export default function LayOutFull() {
  return (
    <LayoutBackground>
      <LayoutTop />
      <LayoutMain>
        <AppRoutes />
      </LayoutMain>
      <LayoutFooter />
    </LayoutBackground>
  );
}
