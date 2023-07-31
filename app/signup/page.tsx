"use client"

import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from "yup"
import { signupValidations } from "./signupValidations"
import useUser from "@/api/hooks/useUser"
import { reqSignupInter, signUpValues } from "@/interfaces/req"
import { useState } from "react"
import Link from "next/link"

const initialForm: signUpValues = {
  nickname: "",
  pin: "",
  confirmPin: "",
}

export default function SignUp() {
  const { signUp } = useUser()
  const [reqStatus, setReqStatus] = useState<reqSignupInter>({
    error: "none",
    status: "none",
  })

  const handleSignUp = async (values: signUpValues) => {
    setReqStatus({
      error: "none",
      status: "pending",
    })
    await signUp({ nickname: values.nickname, pin: values.pin })
      .then(() => {
        setReqStatus({
          error: "none",
          status: "success",
        })
      })
      .catch((e) => {
        if (e.response.status == 400) {
          setReqStatus({
            error: "nickname in use",
            status: "rejected",
          })
        } else if (e.response.status == 500) {
          setReqStatus({
            error: "internal server error",
            status: "rejected",
          })
        }
      })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-center">Sign Up</h1> */}

      {reqStatus.status === "success" && (
        <div>
          <p className="text-cyan-50">
            Registro exitoso!, ahora debes iniciar sesión con la cuenta que
            acabas de crear.
          </p>

          <Link href={"/login"} className="text-cyan-200  underline">
            Siguiente
          </Link>
        </div>
      )}

      {reqStatus.status !== "success" && (
        <Formik
          initialValues={initialForm}
          onSubmit={(v) => {
            handleSignUp(v)
          }}
          validationSchema={yup.object(signupValidations)}
        >
          {() => (
            <Form
              onChange={() => {
                if (
                  reqStatus.error != "none" &&
                  reqStatus.status != "pending"
                ) {
                  setReqStatus({
                    error: "none",
                    status: "none",
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
                  className="text-red-400 max-w-xs"
                />
              </div>
              <div className="mb-2  flex flex-col">
                <label htmlFor="pin" className="text-cyan-200">
                  Pin:
                </label>
                <Field
                  name="pin"
                  type="password"
                  className="text-gray-950 p-0.5"
                />
                <ErrorMessage
                  name="pin"
                  component="p"
                  className="text-red-400"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="confirmPin" className="text-cyan-200">
                  Confirmar el pin:
                </label>
                <Field
                  name="confirmPin"
                  type="password"
                  className="text-gray-950 p-0.5"
                />
                <ErrorMessage
                  name="confirmPin"
                  component="p"
                  className="text-red-400"
                />
              </div>

              {reqStatus.error === "nickname in use" && (
                <p className="text-red-400">
                  Ese nombre de usuario no esta disponible
                </p>
              )}
              {reqStatus.error === "internal server error" && (
                <p className="text-red-400">
                  Hubo un error interno con la solicitud
                </p>
              )}

              {reqStatus.status === "pending" && (
                <p className="text-cyan-50">Cargando...</p>
              )}

              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-300 p-1 rounded m-1 active:bg-cyan-200"
              >
                Registarse
              </button>
            </Form>
          )}
        </Formik>
      )}
    </main>
  )
}
