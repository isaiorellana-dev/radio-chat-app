import { Providers } from "@/context/providers"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import MyTunerWidget from "./components/Widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Conexion Celestial Radio",
  description: "Sitio web oficial de Conexion Celestial Radio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "flex flex-col min-h-screen")}>
        <MyTunerWidget />
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  )
}
