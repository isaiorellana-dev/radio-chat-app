import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/AuthSlice"
import userReducer from "./slices/UserSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
