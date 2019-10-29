import React from 'react';
import { logout } from '../../config/auth';

const Logout = ({ history }) => {
  logout(history);
  return null;
};

export default Logout;
