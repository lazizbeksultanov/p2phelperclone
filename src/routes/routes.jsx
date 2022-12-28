import React, { lazy } from 'react';
import { useRoutes } from 'react-router';
const Home = lazy(() => import("./../pages/Home"));

export default function Routes() {

    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
    ]);
}
