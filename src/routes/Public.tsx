import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Public = () => {
  const { pathname } = useLocation();

  const token = localStorage.getItem('token');
  const logged_in_once = localStorage.getItem('logged_in_once');

  return token ? (
    <Navigate to='/dashboard' />
  ) : !logged_in_once && pathname !== '/' ? (
    <Navigate to='/' />
  ) : (
    <Outlet />
  );
};

export default Public;
