import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Register from './register/Register';
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
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
