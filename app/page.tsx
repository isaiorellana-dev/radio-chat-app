import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-cyan-50">
        hello <span className="text-cyan-200">world</span>
        <div className="p-10 bg-emerald-600">
          <p className="text-emerald-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            excepturi maiores in maxime quo corporis vel debitis beatae,
            voluptas ipsam neque! Tempora temporibus quasi quidem commodi
            repudiandae ipsa harum unde.
          </p>
        </div>
      </h1>
    </main>
  )
}
