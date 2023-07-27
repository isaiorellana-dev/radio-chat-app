import { axiosInstance } from "../axiosInstance"
import { AxiosResponse } from "axios"

function useUser() {
  const getUserData = async (): Promise<AxiosResponse<any, any>> => {
    return await axiosInstance.get("/auth/user")
  }

  return {
    getUserData,
  }
}

export default useUser
