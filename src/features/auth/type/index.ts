export type TLoginRequest = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  message: string
}

export type TGetCurrentUserResponse = TUser

export type TRegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export type TRegisterResponse = TUser;

export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  id: number
};

// Forgot Password
export type TForgetPasswordRequest = {
  email: string;
};

export type TForgetPasswordResponse = {
  user: null;
};
// Reset Password
export type TResetPasswordRequest = {
  email: string | string[] | undefined;
  token: string | string[] | undefined;
  new_password: string;
  confirm_new_password: string;
};

export type TResetPasswordResponse = {
  user: null;
};

// Check Token
export type TCheckTokenRequest = {
  email: string;
  token: string;
};
export type TCheckTokenResponse = {
  user: TUser;
};
