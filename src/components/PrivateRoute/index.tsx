import React, { createElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Route as IRoute } from '@/routes/types';

export default (props: IRoute) => {
  const { component, routes, ...rest } = props;
  const isLogin = useSelector((store: RootState) => store.auth.isLogin);
  return (
    <Route
      {...rest}
      render={(renderProps) =>
        isLogin ? (
          createElement(component, { ...renderProps, routes })
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: renderProps.location },
            }}
          />
        )
      }
    />
  );
};
