import React, { memo, createElement } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Route as IRoute } from '@/routes/types';

export default memo((route: IRoute) => {
  const auth = useSelector((store: RootState) => store.auth.auth);
  const PageComponent = route.component;
  return (
    <Route
      path={route.path}
      render={(props) => {
        const hasAuth = auth.includes(route.authCode);
        if (hasAuth) {
          document.title = route.title;
          return createElement(PageComponent, {
            ...props,
            routes: route.routes,
          });
        }
        return <div>no auth</div>;
      }}
    />
  );
});
