"use client"

import { loginCredentials, reqLoginInter } from "@/interfaces/req"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { AuthToken } from "../../api/services/AuthTokenService"
import { useDispatch, useSelector } from "react-redux"
import { setAuth } from "@/context/slices/AuthSlice"
import useUser from "@/api/hooks/useUser"
import { setUser } from "@/context/slices/UserSlice"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { stateInterface } from "../../interfaces/redux"
import { loginValidations } from "./loginValidations"
import * as yup from "yup"
import Link from "next/link"

const initialForm: loginCredentials = {
  nickname: "",
  pin: "",
}

export default function Login() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { getUserData, logIn } = useUser()
  const tokenService = new AuthToken()
  const auth = useSelector((state: stateInterface) => state.auth)
  const [reqStatus, setReqStatus] = useState<reqLoginInter>({
    error: "none",
    loading: false,
  })

  const handleSubmit = async (values: loginCredentials) => {
    setReqStatus({
      error: "none",
      loading: true,
    })
    await logIn(values)
      .then((res) => {
        if (res) {
          tokenService.setToken(res.data.token)
          dispatch(setAuth())
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          setReqStatus({
            error: "bad credentials",
            loading: false,
          })
        } else if (err.response.status == 500) {
          setReqStatus({
            error: "internal server error",
            loading: false,
          })
        }
      })
    await getUserData()
      .then((res) => {
        dispatch(setUser(res.data))
        setReqStatus({
          error: "none",
          loading: false,
        })
        router.push("/chat")
      })
      .catch(() => {})
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
          <Form
            className="flex flex-col items-center"
            onChange={() => {
              if (!reqStatus.loading) {
                setReqStatus({
                  error: "none",
                  loading: false,
                })
              }
            }}
          >
            <div className="mb-2 flex flex-col">
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

            <div className="mb-2 flex flex-col">
              <label htmlFor="password" className="text-cyan-200">
                Pin:
              </label>
              <Field name="pin" type="password" className="text-gray-950" />
              <ErrorMessage name="pin" component="p" className="text-red-400" />
            </div>

            {reqStatus.error === "bad credentials" && (
              <p className="text-red-200">
                Nombre de usuario o contraseña incorrectos
              </p>
            )}
            {reqStatus.error === "internal server error" && (
              <p className="text-red-200">
                Ocurrio un error al hacer tu solicitud, intenta de nuevos en
                unos minutos
              </p>
            )}
            {reqStatus.loading && <p className="text-cyan-50">Cargando...</p>}

            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 p-1 rounded m-1 mb-3 active:bg-cyan-200"
            >
              Iniciar sesión
            </button>
            <p className="text-cyan-100">No tienes una cuenta?</p>
            <Link href={"/signup"} className="text-cyan-200 underline">
              Registrarse
            </Link>
          </Form>
        )}
      </Formik>
    </main>
  )
}
