import { Suspense } from "react"
import Chat from "./page"
import Loading from "./loading"

export default function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <Chat />
    </Suspense>
  )
}
