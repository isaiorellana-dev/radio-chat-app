import * as yup from "yup"

export const signupValidations = {
  nickname: yup
    .string()
    .matches(/^[a-z]+$/, {
      message:
        "Ingresa un nombre de usuario valido, solo se aceptan minusculas.",
    })
    .lowercase("Solo se acpetan letras minusculas.")
    .strict()
    .required("Nombre de usuario es requerido"),
  pin: yup
    .string()
    .matches(/^\d+$/, {
      message: "Ingresa un pin valido.",
    })
    .min(4, "Tu pin debe ser de 4 digitos o mas.")
    .max(16, "El pin no puede ser mayor de 16 digitos.")
    .required("Pin requerido."),
  confirmPin: yup
    .string()
    .oneOf([yup.ref("pin")], "El pin no coincide.")
    .required("Pin requerido."),
}
