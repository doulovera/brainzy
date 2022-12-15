import { useEffect, useState } from 'react';
import { onAuthChanged } from '@services/auth';
import { useUser } from '@store/user';

// @ts-ignore
import cookieCutter from 'cookie-cutter';

export default function useAuth () {
  const store = useUser();

  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    onAuthChanged((userInfo) => {
      if (userInfo !== null && !store.isActive) {
        const { jwt: token, ...values } = userInfo;
        store.setUser(values);

        cookieCutter.set('token', token, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) });
        cookieCutter.set('aud', process.env.NEXT_PUBLIC_AUD);
        cookieCutter.set('cert_str', process.env.NEXT_PUBLIC_CERT_STR);
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
  };
}
