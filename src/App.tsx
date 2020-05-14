import React, { Suspense } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '@components/RouteWithSubRoutes';
import PrivateRouteWithSubRoutes from '@components/PrivateRouteWithSubRoutes';
import Loading from '@components/Loading';
import privateRoutes from '@/routes/privateRoutes';
import baseRoutes from '@/routes/baseRoutes';
import '@css/common.css';

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {baseRoutes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
          {privateRoutes.map((route) => (
            <PrivateRouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
export default App;
