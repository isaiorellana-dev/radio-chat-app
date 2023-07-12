"use client"
import { getMessages } from "@/utils/messages"
import Message from "./components/Message"
import { useEffect, useState } from "react"
import { message } from "@/interfaces/res"

export default function Chat() {
  const [messages, setMessages] = useState<Array<message>>([])

  useEffect(() => {
    getMessages().then((res) => setMessages(res))

    const socket = new WebSocket("ws://localhost:5050/ws")

    socket.onopen = () => {
      console.log("Conectado al servidor WebSocket")
    }
    socket.onmessage = (event) => {
      const mensaje = event.data
      setMessages((lastMessages) => [...lastMessages, JSON.parse(mensaje)])
    }
    socket.onclose = () => {
      console.log("Desconectado del servidor WebSocket")
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-3">
      <div>
        {messages.map((m) => (
          <Message key={m.id} message={m} />
        ))}
      </div>
    </main>
  )
}
