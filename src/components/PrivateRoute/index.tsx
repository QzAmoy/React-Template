import React, { createElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Routes } from '@/routes/types';

interface IProps extends RouteProps {
  routes?: Routes;
}

export default (props: IProps) => {
  const { component, ...rest } = props;
  const isLogin = useSelector((store: RootState) => store.sysConfigs.isLogin);
  return (
    <Route
      {...rest}
      render={(renderProps) =>
        isLogin ? (
          createElement(component, { ...renderProps, routes: props.routes })
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
