import { axiosInstance } from "@/lib";

export const logout = () => {
  return axiosInstance.post("/api/logout");
};
