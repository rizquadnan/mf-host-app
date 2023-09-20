export type TLoginRequest = {
  nik: string;
  password: string;
};

export type TLoginResponse = {
  data: TUser;
};

export type TGetCurrentUserRequest = {
  token: string;
};

export type TGetCurrentUserResponse = {
  data: {
    id: string;
    nik: string;
    system_role_id: number;
    name: string;
    email: string;
    phone: string;
    departement: string;
    jabatan: string;
    status: number;
    site_location: string;
    image_profile: string;
    role_system: {
      id: number;
      name: string;
      level: number;
    };
    created_at: string;
    updated_at: string;
  };
};

export type TRegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type TRegisterResponse = {
  user: TUser;
};

export type TUser = {
  user_id: string;
  name: string;
  email: string;
  nik: string;
  system_role_id: number;
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
