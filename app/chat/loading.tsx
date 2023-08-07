export default function Loading() {
  const numbersArray: number[] = Array.from(
    { length: 50 },
    (_, index) => index + 1
  )

  const esPar = (n: number): boolean => n % 2 === 0

  return (
    <main className=" relative flex-grow flex flex-col items-center overflow-y-scroll">
      {numbersArray.map((item) => (
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
    </main>
  )
}
