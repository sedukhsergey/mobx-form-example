import React from 'react';
import { Redirect } from 'react-router-dom';

const Navigator = () => {
  try {
    const response = JSON.parse(localStorage.getItem('auth'));
    if (response?.isLogin) {
      return <Redirect to={'/dashboard'} />;
    }
    return <Redirect to={'/login'} />;
  } catch (e) {
    return <Redirect to={'/page404'} />;
  }
};

export default Navigator;
