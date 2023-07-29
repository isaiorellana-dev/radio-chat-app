import { ErrorMessage, Field, Form, Formik } from "formik"

const initialForm = {
  nickname: "",
  pin: "",
  confirmPin: "",
}

export default function SignUp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center">Sign Up</h1>

      <Formik initialValues={initialForm} onSubmit={() => {}}>
        {() => (
          <Form>
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
          </Form>
        )}
      </Formik>
    </main>
  )
}
