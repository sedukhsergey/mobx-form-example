import React from 'react';
import { Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  RouterConfig, RoutesWithSubRoutes,
} from 'routes';

const App = () => {

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

export default observer(App);
