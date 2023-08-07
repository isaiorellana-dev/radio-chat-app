import { useSelector } from "react-redux"
import { useState } from "react"
import { stateInterface } from "@/interfaces/redux"
import useMessages from "@/api/hooks/useMessages"
import { useRouter } from "next/navigation"

const MessagesSender = () => {
  const [text, setText] = useState("")
  const { sendMessage } = useMessages()
  const router = useRouter()
  const auth = useSelector((state: stateInterface) => state.auth)

  if (!auth.isAuthenticated) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          router.push("/login")
        }}
        className="w-full bg-slate-500 flex justify-between max-w-xl"
      >
        <input
          type="text"
          className="w-full text-slate-900 px-1.5 h-9"
          placeholder="Inicia sesión para enviar mensajes."
          value={text}
          readOnly
        />
        <button className="bg-cyan-500 p-0.5" type="submit">
          Login
        </button>
      </form>
    )
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage(text).then(() => {
            setText("")
          })
        }}
        className="w-full bg-slate-500 flex justify-between max-w-xl"
      >
        <input
          type="text"
          className="w-full text-slate-900 px-1.5 h-9"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button className="bg-cyan-500 p-0.5" type="submit">
          Enviar
        </button>
      </form>
    )
  }
}

export default MessagesSender
