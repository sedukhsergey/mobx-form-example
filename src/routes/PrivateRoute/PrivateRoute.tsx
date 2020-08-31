import React from 'react';
import {
  Route, Redirect,
} from 'react-router-dom';
import RoutesList from '../RoutesList';
import { localStorage } from 'utils';
import { initStore } from 'store';

type RouteElement = {
    path: string;
    exact?: boolean;
    component: React.ReactElement;
    children: React.ReactElement;
    status: string;
    allowedRoles?: string[]
};

type Props = {
    path: string;
    component: React.ReactNode | any;
    children: React.ReactNode | string;
    routes?: RouteElement[];
};
const PrivateRoute: React.FC<Props> = ({
  component: Component,
  children,
  path,
  routes,
}) => (
  <Route
    path={path}
    render={props => {
      const { authStore: { isAuthenticated } } = initStore();
      return isAuthenticated  ? (
        <Component
          routes={routes}
          match={props.match}
        >
          {children}
        </Component>
      ) : (
        <Redirect
          to={{
            pathname: RoutesList.login,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default PrivateRoute;
