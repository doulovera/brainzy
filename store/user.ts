import { signInAuth, signOutAuth } from 'services/auth';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// @ts-ignore
import cookieCutter from 'cookie-cutter';

type Store = {
  isActive: boolean;
  user: any | null;
  setUser: (user: any) => void;
  signIn: () => void;
  signOut: () => void;
  setToken: () => void;
}

export const useUser = create(persist<Store>(
  (set, get) => ({
    isActive: false,
    user: null,
    setUser: async (user) => {
      set((state) => ({
        ...state,
        user,
        isActive: true,
      }));
    },
    signIn: async () => {
      await signInAuth();
    },
    signOut: async () => {
      await signOutAuth();
      set((state) => ({
        ...state,
        user: null,
        isActive: false,
      }));
    },
    setToken: async () => {
      const { user } = get();
      const token = user.jwt;
      cookieCutter.set('token', token, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), path: '/', sameSite: 'lax' });
    },
  }),
  {
    name: 'user',
    getStorage: () => sessionStorage,
  },
));
