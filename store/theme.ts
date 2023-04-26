import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(persist(
  (set: any) => ({
    theme: 'dark',
    toggleMode: () => set((state: any) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  }),
  {
    name: 'theme',
    storage: createJSONStorage(() => localStorage),
  },
))
