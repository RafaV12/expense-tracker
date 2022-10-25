import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export type ProtectedRouteProps = {
  redirectTo: string;
};

function ProtectedRoute({ redirectTo }: ProtectedRouteProps) {
  const { user } = useAppContext();

  if (user) {
    return <Outlet />;
  } else if (user === undefined) {
    return <></>;
  } else return <Navigate to={redirectTo} />;
}

export default ProtectedRoute;
