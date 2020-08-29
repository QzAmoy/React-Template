import React, { memo, Suspense } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import AuthRouteWithSubRoutes from '@components/AuthRouteWithSubRoutes';
import Loading from '@components/Loading';
import { Routes } from '@/routes/types';

interface IProps {
  routes: Routes;
}

export default memo((props: IProps) => {
  const { routes } = props;
  return (
    <Layout.Content>
      content
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map((route) => (
            <AuthRouteWithSubRoutes {...route} />
          ))}
          <Route render={() => <div>404</div>} />
        </Switch>
      </Suspense>
    </Layout.Content>
  );
});
