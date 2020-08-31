import React from 'react';
import { Route } from 'react-router-dom';
import {
  PrivateRoute,
  PublicRoute,
} from 'routes';


type RouteElement = {
  path: string;
  exact?: boolean;
  component: React.ReactElement;
  children: React.ReactElement;
  status: string;
  allowedRoles?: string[];
};
type Props = {
  status: string;
  component: React.ReactNode | any;
  routes?: RouteElement[];
  allowedRoles?: string[];
  children?: React.ReactNode | string;
  path: string;
};

const RouteWithSubRoutes = ({
  status,
  component: Layout,
  // allowedRoles = [],
  routes,
  children,
  path,
  ...rest
}: Props) => {
  if (status === 'private') {
    return (
      <PrivateRoute
        path={path}
        component={
          Layout
          // allowedRoles.length ?
          //   WithRole({
          //     allowedRoles, wrapper: Layout,
          //   }) : Layout
        }
        routes={routes}
        {...rest}
      >
        {children}
      </PrivateRoute>
    );
  }

  if (status === 'public') {
    return (
      <PublicRoute
        component={Layout}
        routes={routes}
        path={path}
        {...rest}
      >
        {children}
      </PublicRoute>
    );
  }
  return (
    <Route
      path={path}
      render={props => (
        <Layout
          routes={routes}
          {...props} />
      )}
      {...rest}
    >{children}</Route>
  );
};

export default RouteWithSubRoutes;
