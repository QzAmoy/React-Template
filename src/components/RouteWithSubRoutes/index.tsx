import React, { createElement } from 'react';
import { Route } from 'react-router-dom';
import { Route as IRoute } from '@/routes/types';

export default (props: IRoute) => {
  console.log('route', props);
  const { component, ...rest } = props;
  return (
    <Route
      path={rest.path}
      render={(renderProps) => {
        document.title = rest.title;
        return createElement(component, {
          ...renderProps,
          routes: rest.routes,
        });
      }}
    />
  );
};
