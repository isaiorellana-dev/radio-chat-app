import { authState } from "@/interfaces/redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState: authState = {
  isAuthenticated: false,
  // isTokenValid: false,
  // userId: "",
  // userName: "",
  // userRol: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      // const { userId, username, rol } = action.payload
      state.isAuthenticated = true
      // state.isTokenValid = false
      // state.userId = userId
      // state.userName = username
      // state.userRol = rol
    },

    logOut: (state) => {
      state.isAuthenticated = false
      // state.isTokenValid = false
      // state.userId = ""
      // state.userName = ""
      // state.userRol = ""
    },
  },
})

export const { setAuth, logOut } = authSlice.actions

export default authSlice.reducer
