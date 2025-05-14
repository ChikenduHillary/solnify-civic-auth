// store/userStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UserState {
  user: {
    id: number;
    name: string;
    email: string;
  } | null;
  setUser: (user: UserState["user"]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage), // Use sessionStorage
    }
  )
);
