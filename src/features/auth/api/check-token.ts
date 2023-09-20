import { axiosInstance } from "@/lib";
import { TCheckTokenRequest, TCheckTokenResponse } from "../type";

export const checkToken = (props: TCheckTokenRequest) => {
  return axiosInstance.post<TCheckTokenResponse>(
    `/check-token?email=${props?.email}&token=${props?.token}`,
  );
};
