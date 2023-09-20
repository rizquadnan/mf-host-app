import {
  login,
  forgetPassword,
  resetPassword,
  logout,
  register,
} from "@/features/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TAuthStore } from "./type";
import { useStoreCSR } from "../utils";

export const useAuthStore = create<TAuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      remember: false,
      nik: null,
      password: null,
      doLogin: async ({ nik, password, remember }) => {
        try {
          const res = await login({ nik, password });

          set(() => ({
            remember: remember,
          }));

          if (remember) {
            set(() => ({
              nik: nik,
              password: password,
            }));
          }

          set(() => ({ user: res.data.data }));
        } catch (error) {
          throw error;
        }

        return;
      },
      doForgetPassword: async ({ email }) => {
        try {
          await forgetPassword({ email });
        } catch (error) {
          throw error;
        }

        return;
      },
      doResetPassword: async ({
        email,
        token,
        new_password,
        confirm_new_password,
      }) => {
        try {
          await resetPassword({
            email,
            token,
            new_password,
            confirm_new_password,
          });
        } catch (error) {
          throw error;
        }

        return;
      },
      resetUser: () => {
        set(() => ({ user: null }));
      },
      doRegister: async ({ email, password, username }) => {
        try {
          const res = await register({ email, password, username });

          set(() => ({ user: res.data.user }));
        } catch (error) {
          throw error;
        }

        return;
      },
      doLogout: async () => {
        try {
          const res = await logout();
          console.log(res);

          if (!get().remember) {
            set(() => ({ nik: null, password: null }));
          }

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
