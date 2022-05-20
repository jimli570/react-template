import React from 'react';

const LayoutFull = React.memo(React.lazy(() => import('views/LayoutFull')));

export default function App() {
  return (
    <div className="app" data-testid="app-testID">
      <LayoutFull />
    </div>
  );
}
