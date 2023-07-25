import { loginCredentials } from "@/interfaces/req"
import { axiosInstance } from "../axiosInstance"
import { AxiosResponse } from "axios"

interface token {
  token: string
}

const useAuth = () => {
  const logIn = async (
    credentials: loginCredentials
  ): Promise<void | AxiosResponse<token>> => {
    return await axiosInstance.post("/login", {
      nickname: credentials.nickname,
      pin: credentials.pin,
    })
  }
  return { logIn }
}

export default useAuth
