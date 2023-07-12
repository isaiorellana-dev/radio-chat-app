"use client"
import { getMessages } from "@/utils/messages"
import Message from "./components/Message"
import { useEffect, useRef, useState } from "react"
import { message } from "@/interfaces/res"

export default function Chat() {
  const [messages, setMessages] = useState<Array<message>>([])
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getMessages().then((res) => setMessages(res))

    if (mainRef.current) {
      console.log("hello")
      mainRef.current.scrollTop = mainRef.current.clientHeight
    }

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
    <main
      className="flex flex-col items-center"
      style={{
        height: "calc(100vh - 80px)",
        overflowY: "scroll",
      }}
      ref={mainRef}
    >
      <div>
        {messages.map((m, i) => (
          <Message key={m.id} message={m} index={i} />
        ))}
      </div>
    </main>
  )
}
