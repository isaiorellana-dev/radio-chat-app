"use client"

import useAuth from "@/api/hooks/useAuth"
import { loginCredentials } from "@/interfaces/req"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { AuthToken } from "../../api/services/AuthTokenService"
import { useDispatch, useSelector } from "react-redux"
import { setAuth } from "@/context/slices/AuthSlice"
import useUser from "@/api/hooks/useUser"
import { setUser } from "@/context/slices/UserSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { stateInterface } from "../../interfaces/redux"
import { loginValidations } from "./loginValidations"
import * as yup from "yup"

const initialForm: loginCredentials = {
  nickname: "",
  pin: "",
}

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { logIn } = useAuth()
  const { getUserData } = useUser()
  const tokenService = new AuthToken()
  const auth = useSelector((state: stateInterface) => state.auth)

  const handleSubmit = async (values: loginCredentials) => {
    await logIn(values)
      .then((res) => {
        if (res) {
          tokenService.setToken(res.data.token)
          dispatch(setAuth())
        }
      })
      .catch((err) => console.log(err))
    await getUserData()
      .then((res) => {
        dispatch(setUser(res.data))
        router.push("/chat")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/")
    }
  }, [auth])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Formik
        initialValues={initialForm}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
        validationSchema={yup.object(loginValidations)}
      >
        {() => (
          <Form className="flex flex-col items-center">
            <div className="mb-2">
              <label htmlFor="nickname" className="text-cyan-200">
                Nombre de usuario:
              </label>
              <Field
                name="nickname"
                type="text"
                className="text-gray-950 p-0.5"
              />
              <ErrorMessage
                name="nickname"
                component="p"
                className="text-red-400"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="text-cyan-200">
                Pin:
              </label>
              <Field name="pin" type="password" className="text-gray-950" />
              <ErrorMessage name="pin" component="p" className="text-red-400" />
            </div>

            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 p-1 rounded m-1 active:bg-cyan-200"
            >
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </main>
  )
}
