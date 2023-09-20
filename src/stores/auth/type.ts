import { TUser } from "@/features/auth";

export type TAuthStore = {
  user: TUser | null;
  nik: string | null;
  password: string | null;
  remember: boolean;
  doLogin: ({
    nik,
    password,
    remember,
  }: {
    nik: string;
    password: string;
    remember: boolean;
  }) => Promise<void>;
  doForgetPassword: ({ email }: { email: string }) => Promise<void>;
  doResetPassword: ({
    email,
    token,
    new_password,
    confirm_new_password,
  }: {
    email: string | string[] | undefined;
    token: string | string[] | undefined;
    new_password: string;
    confirm_new_password: string;
  }) => Promise<void>;
  doLogout: () => Promise<void>;
  doRegister: ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => Promise<void>;
  resetUser: () => void;
};
