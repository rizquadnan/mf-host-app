import { axiosInstance } from "@/lib";
import { TGetCurrentUserRequest, TGetCurrentUserResponse } from "../type";

// export const getCurrentUser = () => {
//   return axiosInstance.get<TGetCurrentUserResponse>("/user");
// };
export const getCurrentUser = (props: TGetCurrentUserRequest) => {
  return axiosInstance.get<TGetCurrentUserResponse>("/profiles", {
    withCredentials: true,
    headers: { Cookie: `token=${props?.token}` },
  });
};
