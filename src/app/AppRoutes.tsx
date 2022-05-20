import React from 'react';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

const PageHome = React.memo(React.lazy(() => import('views/pages/Home/Home')));

interface ISuspenseProps {
  children: React.ReactNode;
}

function Suspense({ children } : ISuspenseProps) {
  return (
    <React.Suspense fallback={<>...</>}>
      { children }
    </React.Suspense>
  );
}

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense><PageHome /></Suspense>} />
        <Route path="/other" element="" />
      </Routes>
    </Router>
  );
}
