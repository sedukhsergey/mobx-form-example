import React from 'react';
import {
  Redirect,
} from 'react-router-dom';
import {
  observer,
} from 'mobx-react';
import {
  useAuthData,
} from 'hooks/useAuthData';

const Navigator = () => {
  const { isAuthorizedStatus, } = useAuthData();
  try {
    if (isAuthorizedStatus) {
      return <Redirect to={'/dashboard'} />;
    }
    return <Redirect to={'/login'} />;
  } catch (e) {
    return <Redirect to={'/page404'} />;
  }
};

export default observer(Navigator);
