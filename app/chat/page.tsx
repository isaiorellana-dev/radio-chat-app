"use client"

import { getMessages } from "@/utils/messages"
import { useEffect, useState } from "react"

export default function Chat() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages().then((data) => {
      console.log(data)
      setMessages(data)
    })

    // console.log(messages)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Chat</h1>

      {messages.map((e: any) => (
        <p key={e.id}>{e.body}</p>
      ))}
    </main>
  )
}
