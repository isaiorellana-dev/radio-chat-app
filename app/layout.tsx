import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conexion Celestial Radio",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-cyan-700">
          <div className="flex justify-between px-5 py-4">
            <div>Play</div>
            {/* <h1 className="text-center text-cyan-60 semi-bold">
              Conexion Celestial Radio
            </h1> */}
            <Link href={"una-vaina-loka"}>Iniciar Sesion</Link>
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

        {children}
      </body>
    </html>
  )
}
