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
    console.log(auth)
    if (auth.isAuthenticated) {
      router.push("/")
    }
  }, [auth])

  return (
    <div>
      <Formik
        initialValues={initialForm}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {(formik) => (
          <Form>
            <label htmlFor="nickname">Nombre de usuario:</label>
            <Field name="nickname" type="text" className="text-gray-950" />
            <ErrorMessage name="nickname" component="p" />

            <label htmlFor="password">Contraseña:</label>
            <Field name="pin" type="password" className="text-gray-950" />
            <ErrorMessage name="pin" component="p" />
            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
