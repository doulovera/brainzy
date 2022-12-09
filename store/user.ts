import { signInAuth, signOutAuth } from 'services/auth';
import create from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  isActive: boolean;
  user: any | null;
  setUser: (user: any) => void;
  signIn: () => void;
  signOut: () => void;
}

export const useUser = create(persist<Store>(
  (set) => ({
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
  }),
  {
    name: 'user',
    getStorage: () => sessionStorage,
  },
));
