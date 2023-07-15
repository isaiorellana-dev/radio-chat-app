"use client"
import { getMessages } from "@/utils/messages"
import MessageSender from "./components/MessagesSender"
import Message from "./components/Message"
import { useEffect, useRef, useState } from "react"
import { message } from "@/interfaces/res"

export default function Chat() {
  const [messages, setMessages] = useState<Array<message>>([])

  const messageContainerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <main className="flex flex-col items-center">
      <div
        style={{
          height: "calc(100vh - 104px)",
          overflowY: "scroll",
        }}
        ref={messageContainerRef}
        className="max-w-sm"
      >
        {messages.map((m, i) => (
          <Message key={m.id} message={m} index={i} />
        ))}
      </div>
      <MessageSender />
    </main>
  )
}
