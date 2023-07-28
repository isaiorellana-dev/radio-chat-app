"use client"

import { AuthToken } from "@/api/services/AuthTokenService"
import { logOut } from "@/context/slices/AuthSlice"
import { clearUser } from "@/context/slices/UserSlice"
import { use, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Profile = (props: { nickname: string }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const token = new AuthToken()

  const handleLogOut = () => {
    token.clearToken()
    dispatch(logOut())
    dispatch(clearUser())
  }

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        {props.nickname}
      </button>
      {open && (
        <div>
          <button
            type="button"
            onClick={() => {
              handleLogOut()
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}

export default Profile
