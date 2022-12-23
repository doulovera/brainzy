import { useEffect, useState } from 'react';
import { onAuthChanged } from '@services/auth';
import { useUser } from '@store/user';

export default function useAuth () {
  const store = useUser();

  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    onAuthChanged((userInfo) => {
      if (userInfo !== null && !store.isActive) {
        store.setUser(userInfo);
        store.setToken();
      }
    });
  }, []);

  useEffect(() => {
    setUser(store.user);
  }, [store.user]);

  return {
    user,
    signIn: store.signIn,
    signOut: store.signOut,
    setToken: store.setToken,
  };
}
