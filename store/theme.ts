import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(persist(
  (set: any) => ({
    theme: 'dark',
    toggleMode: () => set((state: any) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  }),
  {
    name: 'theme',
    getStorage: () => localStorage,
  },
));
