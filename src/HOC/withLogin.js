import React from 'react';
import { Redirect } from 'react-router-dom';

const withLogin = Component => {
  if (localStorage.getItem('excelId')) {
    return Component;
  }
  alert('Not Logged in');
  return () => <Redirect to="/login" />;
};

export default withLogin;
