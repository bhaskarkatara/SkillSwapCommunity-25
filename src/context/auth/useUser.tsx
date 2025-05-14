import { useAuth } from './useAuth';

export const useUser = () => {
  const { user } = useAuth();

  if (!user) throw new Error('Unable to load user details');

  return { user };
};
