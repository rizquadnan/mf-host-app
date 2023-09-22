import { TUser } from "@/features/auth";

export type TAuthStore = {
  user: TUser | null;
  doLogin: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  doLogout: () => Promise<void>;
  doRegister: ({
    email,
    password,
    firstName,
    lastName,
    passwordConfirm
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    passwordConfirm: string
  }) => Promise<void>;
  resetUser: () => void;
};
