import React, { createElement, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Route as IRoute } from '@/routes/types';

export default (route: IRoute) => {
  return (
    <Route
      path={route.path}
      render={(props) => {
        document.title = route.title;
        return createElement(lazy(route.component), {
          ...props,
          routes: route.routes,
        });
      }}
    />
  );
};
