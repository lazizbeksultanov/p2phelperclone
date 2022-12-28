import React, { Suspense } from 'react';
import Routes from '../../routes/routes';

export default function Layout() {
  return (
    <Suspense fallback="" >
      <Routes />
    </Suspense>
  )
}
