import { loginCredentials } from "@/interfaces/req"
import { axiosInstance } from "../axiosInstance"
import { AxiosResponse } from "axios"

interface token {
  token: string
}

function useUser() {
  const logIn = async (
    credentials: loginCredentials
  ): Promise<void | AxiosResponse<token>> => {
    return await axiosInstance.post("/login", {
      nickname: credentials.nickname,
      pin: credentials.pin,
    })
  }

  const getUserData = async (): Promise<AxiosResponse<any, any>> => {
    return await axiosInstance.get("/auth/user")
  }

  return {
    getUserData,
    logIn,
  }
}

export default useUser
