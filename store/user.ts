import create from 'zustand';
import { persist } from 'zustand/middleware';
import { signInAuth, signOutAuth } from 'services/auth';

// @ts-ignore
import cookieCutter from 'cookie-cutter';

type Store = {
  isActive: boolean;
  user: any | null;
  setUser: (user: any) => void;
  signIn: () => void;
  signOut: () => void;
  setToken: (token: string) => void;
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
      try {
        await signInAuth();
      } catch (error) {
        console.error(error);
      }
    },
    signOut: async () => {
      await signOutAuth();
      set((state) => ({
        ...state,
        user: null,
        isActive: false,
      }));
    },
    setToken: async (token) => {
      cookieCutter.set('token', '', { path: '/' });
      cookieCutter.set('token', token, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), path: '/', sameSite: 'lax', httpOnly: true });
    },
  }),
  {
    name: 'user',
    getStorage: () => sessionStorage,
  },
));
