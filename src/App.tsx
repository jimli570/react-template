import React from 'react';

const AppRoutes = React.memo(React.lazy(() => import('app/AppRoutes')));

export default function App() {
  return (
    <div className="app" data-testid="app-testID">
      <AppRoutes />
    </div>
  );
}
