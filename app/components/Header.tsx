"use client"

import useUser from "@/api/hooks/useUser"
import { logOut, setAuth } from "@/context/slices/AuthSlice"
import { clearUser, setUser } from "@/context/slices/UserSlice"
import { stateInterface } from "@/interfaces/redux"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Profile from "./common/Profile"

const Header = () => {
  const { getUserData } = useUser()
  const auth = useSelector((state: stateInterface) => state.auth)
  const user = useSelector((state: stateInterface) => state.user)
  const dispatch = useDispatch()

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
      <div className="flex justify-between px-5 py-4 text-sm text-cyan-200">
        <div>Play</div>
        <h1 className="text-center text-cyan-50 semi-bold">
          Conexion Celestial Radio
        </h1>
        {auth.isAuthenticated && user.nickname ? (
          <Profile nickname={user.nickname} />
        ) : (
          <Link href={"/login"}>Log in</Link>
        )}
      </div>

      <nav className="bg-cyan-800">
        <ul className="text-cyan-100 flex justify-between px-5 max-w-xl mx-auto">
          <li>
            <Link href={"/"} className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"/chat"} className="hover:underline">
              Chat
            </Link>
          </li>
          <li>
            <Link href={"/quienes-somos"} className="hover:underline">
              ¿Quienes somos?
            </Link>
          </li>
          <li>
            <Link href={"/contacto"} className="hover:underline">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
