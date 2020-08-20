import React, { createElement, lazy } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Route as IRoute } from '@/routes/types';

export default (route: IRoute) => {
  const auth = useSelector((store: RootState) => store.auth.auth);
  return (
    <Route
      path={route.path}
      render={(props) => {
        const hasAuth = auth.indexOf(route.authCode) !== -1;
        if (hasAuth) {
          document.title = route.title;
          return createElement(lazy(route.component), {
            ...props,
            routes: route.routes,
          });
        }
        return <div>no auth</div>;
      }}
    />
  );
};
