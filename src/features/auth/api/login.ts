import { axiosInstance } from "@/lib";
import { TLoginRequest, TLoginResponse } from "../type";

export const login = (props: TLoginRequest) => {
  return axiosInstance.post<TLoginResponse>("/api/login", props);
};
