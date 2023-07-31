import * as yup from "yup"

export const loginValidations = {
  nickname: yup
    .string()
    .matches(/^\w+$/, {
      message: "Ingresa un nombre de usuario valido.",
    })
    .lowercase("Solo se aceptan letras minusculas.")
    .strict()
    .required("Ingresa el nombre de usuario."),
  pin: yup
    .string()
    .matches(/^\d+$/, {
      message: "Ingresa un pin valido.",
    })
    .required("Pin requerido."),
}
