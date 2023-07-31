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

  const signUp = async (
    credentials: loginCredentials
  ): Promise<void | AxiosResponse<any, any>> => {
    return await axiosInstance.post("/signup", {
      nickname: credentials.nickname,
      pin: credentials.pin,
    })
  }

  return {
    getUserData,
    logIn,
    signUp,
  }
}

export default useUser
