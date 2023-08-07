"use client"

import MessageSender from "./components/MessagesSender"
import Message from "./components/Message"
import { useEffect, useRef, useState } from "react"
import { message } from "@/interfaces/res"
import useMessages from "@/api/hooks/useMessages"
import { wsStates } from "@/interfaces/messagesState"
import { OFFLINE_STATE, ONLINE_STATE } from "@/constants/const"

export default function Chat() {
  const [messages, setMessages] = useState<Array<message>>([])
  const [loading, setLoading] = useState("pending")
  const [wsState, setWsState] = useState<wsStates>(OFFLINE_STATE)
  const { getMessages } = useMessages()

  const messageContainerRef = useRef<HTMLDivElement>(null)
  getMessages()
    .then((res) => {
      setMessages(res)
      setLoading("success")
    })
    .catch(() => {
      setLoading("rejected")
    })
  useEffect(() => {
    let URL = ""

    if (process.env.NEXT_PUBLIC_WS_URL) {
      URL = process.env.NEXT_PUBLIC_WS_URL

      const socket = new WebSocket(URL)

      socket.onopen = () => {
        setWsState(ONLINE_STATE)
      }
      socket.onmessage = (event) => {
        const mensaje = event.data
        setMessages((lastMessages) => [...lastMessages, JSON.parse(mensaje)])
      }
      socket.onclose = () => {
        setWsState(OFFLINE_STATE)
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

  const numbersArray: number[] = Array.from(
    { length: 50 },
    (_, index) => index + 1
  )

  const esPar = (n: number): boolean => n % 2 === 0

  return (
    <main
      className=" relative flex-grow flex flex-col items-center overflow-y-scroll"
      ref={messageContainerRef}
    >
      {wsState == ONLINE_STATE && loading == "success" ? (
        <p className="fixed w-full text-center text-sm  bg-cyan-100 text-cyan-600 font-bold">
          Conectado{" "}
          <span className="text-lg animate-pulse leading-3 text-red-600">
            ●
          </span>
        </p>
      ) : (
        <p className="fixed w-full text-center text-sm bg-gray-100 text-gray-400 font-bold">
          Desconectado
        </p>
      )}
      {loading == "rejected" && (
        <div className="bg-slate-700 w-full max-w-xl h-screen py-20">
          <p className="text-center text-red-300">
            Hubo un error cargando los mensajes
          </p>
        </div>
      )}
      {loading == "pending" &&
        numbersArray.map((item) => (
          <div
            key={item}
            className={
              esPar(item)
                ? "bg-slate-700 w-full max-w-xl animate-pulse"
                : "bg-slate-800 w-full max-w-xl animate-pulse"
            }
          >
            <p className="text-left text-cyan-100 px-0.5 opacity-5">
              Cargando mensaje
            </p>
          </div>
        ))}
      {loading == "success" &&
        messages.map((m, i) => <Message key={m.id} message={m} index={i} />)}
      <MessageSender />
    </main>
  )
}
