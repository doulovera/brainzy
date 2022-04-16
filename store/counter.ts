import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(persist(
  (set: any, get: any) => ({
    count: 0,
    increaseCount: () => set((state: any) => ({ count: state.count + 1 })),
    decreaseCount: () => set((state: any) => ({ count: state.count - 1 })),
  }),
  {
    name: 'counter',
    getStorage: () => sessionStorage,
  },
));
