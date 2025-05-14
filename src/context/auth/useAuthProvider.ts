import { getUserProfile } from '@/api/auth';
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

    window.location.pathname = '/login';
  };

  return {
    user,
    setUser,
    fetchUser,
    logout,
  };
};

export default useAuthProvider;
