export interface userDataState {
  nickname: string | null
  role: string | null
}

export interface authState {
  isAuthenticated: boolean
}

export interface stateInterface {
  user: userDataState
  auth: authState
}

export interface setUserPayload {
  type: string
  payload: userDataState
}
