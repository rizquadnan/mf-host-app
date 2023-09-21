import { axiosInstance } from "@/lib";
import { TRegisterRequest, TRegisterResponse } from "../type";

export const register = (props: TRegisterRequest) => {
  return axiosInstance.post<TRegisterResponse>("/api/register", props);
};
