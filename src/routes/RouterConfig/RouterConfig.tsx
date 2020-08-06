import React from 'react';
import { Redirect, } from 'react-router-dom';
import {
  DashboardLayout, Layout404, PublicLayout,
} from 'layouts';
import {
  Dashboard, Page404, Login, Registration,
} from 'pages';
import useMatch from 'hooks/useMatch';
import {
  Navigator, RoutesList,
} from 'routes';
const RouterConfig = () => {
  const match = useMatch();
  return {
    routes: [
      {
        path: `${match.path}${RoutesList.login}`,
        exact: true,
        component: PublicLayout,
        children: <Login />,
        status: 'public',
      },
      {
        path: `${match.path}${RoutesList.registration}`,
        exact: true,
        component: PublicLayout,
        children: <Registration />,
        status: 'public',
      },
      {
        path: `${match.path}${RoutesList.dashboard}`,
        exact: true,
        component: DashboardLayout,
        children: <Dashboard />,
        allowedRoles: ['member'],
        status: 'private',
      },
      {
        path: `${match.path}${RoutesList.page404}`,
        exact: true,
        component: Layout404,
        children: <Page404 />,
        status: 'default',
      },
      {
        path: `${match.path}`,
        exact: true,
        component: Navigator,
        status: 'default',
      }
    ],
    noRouteFound: <Redirect
      from={'*'}
      to={`${match.path}${RoutesList.page404}`} />,
  };
};

export default RouterConfig;
