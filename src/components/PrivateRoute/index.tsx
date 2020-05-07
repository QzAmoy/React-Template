import React, { createElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default (props: RouteProps) => {
  const { component, ...rest } = props;
  const isLogin = useSelector((store: RootState) => store.sysConfigs.isLogin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          createElement(component)
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
