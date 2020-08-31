import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import {
  RouterConfig, RoutesWithSubRoutes,
} from 'routes';
import { useStore } from 'hooks/useStore';

const App = () => {
  const { authStore } = useStore();

  useEffect(() => {
    authStore.setAccessToken();
  }, []);

  const {
    routes, noRouteFound,
  } = RouterConfig();
  return (
    <div id="body">
      <Switch>
        {routes.map(route => (
          <RoutesWithSubRoutes
            key={route.path}
            {...route} />
        ))}
        {noRouteFound}
      </Switch>
    </div>
  );
};

export default App;
