"use client"

import useUser from "@/api/hooks/useUser"
import { logOut, setAuth } from "@/context/slices/AuthSlice"
import { clearUser, setUser } from "@/context/slices/UserSlice"
import { stateInterface } from "@/interfaces/redux"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Profile from "./common/Profile"

const Header = () => {
  const { getUserData } = useUser()
  const auth = useSelector((state: stateInterface) => state.auth)
  const user = useSelector((state: stateInterface) => state.user)
  const dispatch = useDispatch()

  const [isPlaying, setIsPlaying] = useState(false)
  const audioURL = "https://stream504.live/8116/stream" // Reemplaza con la URL de tu audio

  const togglePlay = () => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement

    if (isPlaying) {
      audioElement?.pause()
    } else {
      audioElement?.play()
    }

    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    getUserData()
      .then((res) => {
        dispatch(setAuth())
        dispatch(setUser(res.data))
      })
      .catch(() => {
        dispatch(logOut())
        dispatch(clearUser())
      })
  }, [])

  return (
    <header className="bg-cyan-700">
      <div className="flex justify-between px-2 py-4 text-sm text-cyan-300">
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <audio id="audio" src={audioURL}></audio>

        <h1 className="text-center text-cyan-50 font-bold">
          Conexion Celestial
        </h1>
        {auth.isAuthenticated && user.nickname ? (
          <Profile nickname={user.nickname} />
        ) : (
          <Link href={"/login"}>Iniciar sesión</Link>
        )}
      </div>

      <nav className="bg-cyan-800">
        <ul className="text-cyan-100 text-sm flex justify-between px-2 max-w-xl mx-auto">
          <li className="mx-2">
            <Link href={"/"} className="hover:underline">
              Inicio
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"/chat"} className="hover:underline">
              Chat
            </Link>
          </li>
          <li className="mx-2">
            <Link href={"/quienes-somos"} className="hover:underline">
              ¿Quienes somos?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
