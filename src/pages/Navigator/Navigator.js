import React from 'react';
import history from '../../utils/history';

const Navigator = () => {
  try {
    const response = JSON.parse(localStorage.getItem('auth'));
    if (response?.isLogin) {
      history.push('/dashboard');
      return <></>;
    }
    history.push('/login');
    return <></>;
  } catch (e) {
    history.push('/page404');
    return <></>;
  }
};

export default Navigator;
