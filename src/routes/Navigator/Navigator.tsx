import React from 'react';
import { Redirect } from 'react-router';
import { RoutesList } from 'routes';
import { useStore } from 'hooks/useStore';

const Navigator = () => {
  const { authStore } = useStore();
  if (authStore.isAuthenticated) {
    return <Redirect to={`${RoutesList.dashboard}`} />;
  }
  return <Redirect to={`${RoutesList.login}`} />;
};

export default Navigator;
