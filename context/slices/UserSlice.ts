import { setUserPayload, userDataState } from "@/interfaces/redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState: userDataState = {
  nickname: null,
  role: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: setUserPayload) => {
      const { nickname, role } = action.payload
      state.nickname = nickname
      state.role = role
    },
    clearUser: (state) => {
      state.nickname = null
      state.role = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
