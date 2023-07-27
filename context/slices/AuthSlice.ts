import { authState } from "@/interfaces/redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState: authState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true
    },

    logOut: (state) => {
      state.isAuthenticated = false
    },
  },
})

export const { setAuth, logOut } = authSlice.actions

export default authSlice.reducer
