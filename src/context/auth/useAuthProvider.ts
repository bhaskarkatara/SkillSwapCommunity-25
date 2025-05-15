import { getUserProfile } from '@/api/user';
import appRoutes from '@/routes/appRoutes';
import { User } from '@/types/user';
import { useState } from 'react';

const useAuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const res = await getUserProfile();

      setUser(res);
    } catch (error: any) {
      // showErrorToast();
    }
  };

  // Function to logout
  const logout = async () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    setUser(null);

    window.location.pathname = appRoutes.login;
  };

  return {
    user,
    setUser,
    fetchUser,
    logout,
  };
};

export default useAuthProvider;
