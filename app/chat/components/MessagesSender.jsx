import useMessages from "/api/hooks/useMessages"
import { useState } from "react"

const MessagesSender = () => {
  const [text, setText] = useState("")
  const { sendMessage } = useMessages()

  return (
    <div className="w-full bg-slate-500 flex justify-between">
      <input
        type="text"
        className="w-full text-slate-900 px-1.5"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        className="bg-cyan-500 p-0.5"
        type="button"
        onClick={() => {
          sendMessage(text).then(() => {
            setText("")
          })
        }}
      >
        Enviar
      </button>
    </div>
  )
}

export default MessagesSender
