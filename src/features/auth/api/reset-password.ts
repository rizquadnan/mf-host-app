import { axiosInstance } from "@/lib";
import { TResetPasswordRequest, TResetPasswordResponse } from "../type";

export const resetPassword = (props: TResetPasswordRequest) => {
  return axiosInstance.post<TResetPasswordResponse>(
    `/reset-password?email=${props?.email}&token=${props?.token}`,
    {
      password: props?.new_password,
      password_confirm: props?.confirm_new_password,
    },
  );
};
