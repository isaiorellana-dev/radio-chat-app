export interface loginCredentials {
  nickname: string
  pin: string
}

export interface signUpValues {
  nickname: string
  pin: string
  confirmPin: string
}

export interface reqLoginInter {
  error: "none" | "internal server error" | "bad credentials"
  loading: boolean
}

export interface reqSignupInter {
  error: "none" | "nickname in use" | "internal server error"
  status: "pending" | "success" | "rejected" | "none"
}
