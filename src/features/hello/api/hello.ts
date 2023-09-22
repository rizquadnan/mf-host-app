import { axiosInstance } from "@/lib"
import { THelloResponse } from "../type"

export const hello = () => {
  return axiosInstance.get<THelloResponse>("/api/hello")
}