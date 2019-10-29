export const login = (id, history) => {
  localStorage.setItem('excelId', id);
  history.push('/');
};

export const logout = history => {
  localStorage.removeItem('excelId');
  history.push('/login');
};

export const isLoggedIn = () => {
  if (localStorage.getItem('excelId')) {
    return true;
  }
  return false;
};
