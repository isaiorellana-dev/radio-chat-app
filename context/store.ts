import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/AuthSlice"

const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
