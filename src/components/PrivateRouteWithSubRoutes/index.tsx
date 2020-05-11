import React, { lazy } from 'react';
import { Route } from '@/routes/types';
import PrivateRoute from '@components/PrivateRoute';

export default (route: Route) => {
  return <PrivateRoute {...route} component={lazy(route.component)} />;
};
