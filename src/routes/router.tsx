import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import ErrorPage from './error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
