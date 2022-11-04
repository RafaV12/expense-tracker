import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { useAppContext } from '@/context/AppContext';

export type ProtectedRouteProps = {
  redirectTo: string;
};

function ProtectedRoute({ redirectTo }: ProtectedRouteProps) {
  const { authToken } = useAppContext();

  if (authToken) {
    return <Outlet />;
  } else if (authToken === undefined) {
    return <></>;
  } else return <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
