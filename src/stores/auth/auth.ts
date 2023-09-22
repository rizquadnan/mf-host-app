import { login, logout, register, getCurrentUser } from "@/features/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TAuthStore } from "./type";
import { useStoreCSR } from "../utils";

export const useAuthStore = create<TAuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      doLogin: async ({ email, password }) => {
        try {
          await login({ email, password });

          const res = await getCurrentUser() 

          set(() => ({ user: res.data }));
        } catch (error) {
          throw error;
        }

        return;
      },
      resetUser: () => {
        set(() => ({ user: null }));
      },
      doRegister: async ({ firstName, lastName, email, password, passwordConfirm }) => {
        try {
          await register({ firstName, lastName, email, password, passwordConfirm  });
        } catch (error) {
          throw error;
        }

        return;
      },
      doLogout: async () => {
        try {
          await logout();

          set(() => ({ user: null }));
        } catch (error) {
          throw error;
        }

        return;
      },
    }),
    { name: "auth-storage" },
  ),
);

export const useAuthStoreCSR = () =>
  useStoreCSR(useAuthStore, (state) => state);
