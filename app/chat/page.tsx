"use client"

import MessageSender from "./components/MessagesSender"
import Message from "./components/Message"
import { useEffect, useRef, useState } from "react"
import { message } from "@/interfaces/res"
import useMessages from "@/api/hooks/useMessages"

export default function Chat() {
  const [messages, setMessages] = useState<Array<message>>([])
  const { getMessages } = useMessages()

  const messageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getMessages().then((res) => setMessages(res))

    let URL = ""

    if (process.env.NEXT_PUBLIC_WS_URL) {
      URL = process.env.NEXT_PUBLIC_WS_URL

      const socket = new WebSocket(URL)

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
