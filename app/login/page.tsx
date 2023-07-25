"use client"

import useAuth from "@/api/hooks/useAuth"
import { loginCredentials } from "@/interfaces/req"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { AuthToken } from "../../api/services/AuthToken"
import { useDispatch } from "react-redux"
import { setAuth } from "@/context/slices/AuthSlice"

const initialForm: loginCredentials = {
  nickname: "",
  pin: "",
}

export default function Login() {
  const { logIn } = useAuth()
  const tokenService = new AuthToken()
  const dispatch = useDispatch()

  const handleSubmit = async (values: loginCredentials) => {
    await logIn(values)
      .then((res) => {
        if (res) {
          tokenService.setToken(res.data.token)
          dispatch(
            setAuth({
              isAuthenticated: true,
            })
          )
        }
      })
      .catch((err) => console.log(err))
  }

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
            <Field name="nickname" type="text" />
            <ErrorMessage name="nickname" component="p" />

            <label htmlFor="password">Contraseña:</label>
            <Field name="pin" type="password" />
            <ErrorMessage name="pin" component="p" />

            <button type="submit">Log in</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
