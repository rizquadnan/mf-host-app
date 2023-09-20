import { axiosInstance } from "@/lib";
import { TForgetPasswordRequest, TForgetPasswordResponse } from "../type";

export const forgetPassword = (props: TForgetPasswordRequest) => {
  return axiosInstance.post<TForgetPasswordResponse>("/forget-password", {
    email: props.email,
  });
};
