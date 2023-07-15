import axios from "axios"
import { useState } from "react"

const MessagesSender = () => {
  const [text, setText] = useState("")

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjE5LCJOaWNrbmFtZSI6IlBlZHJvIiwiUm9sSUQiOjEsImV4cCI6MTY4OTUyNDIzN30.1KoWdIrDA4sf3lpaMP0sgWRKaux6iRQBoBTdo5XLK00"

  const sendMessage = async () => {
    if (text != "") {
      await axios
        .post(
          "http://localhost:5050/api/v1/message",
          {
            body: text,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          console.log("Mensaje enviado")
          setText("")
        })
        .catch(() => {
          console.log("error")
        })
    }
  }

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
          sendMessage()
        }}
      >
        Enviar
      </button>
    </div>
  )
}

export default MessagesSender
