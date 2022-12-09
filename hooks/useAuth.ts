import { useEffect } from 'react';
import { onAuthChanged } from '@services/auth';
import { useUser } from '@store/user';

export default function useAuth () {
  const store = useUser();

  useEffect(() => {
    onAuthChanged((user) => {
      if (user !== null && !store.isActive) {
        store.setUser(user);
      }
    });
  }, []);

  return {
    user: store.user,
    signIn: store.signIn,
    signOut: store.signOut,
  };
}
