export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6 py-8 px-5">
      <section className="max-w-2xl flex flex-col gap-3">
        <h1 className="text-cyan-50 text-2xl text-center font-semibold">
          Bienvenido a la radio que te conecta con Cristo
        </h1>
        <article className="p-4 bg-emerald-600 rounded">
          <p className="text-emerald-50">
            Porque la palabra de Dios es locura para los que se pierden, pero
            para los que se salvan, esto es a nosotros, es poder de Dios.
          </p>
          <cite className="text-emerald-200">1 Corintios 1:18.</cite>
        </article>
      </section>
      <section className="max-w-2xl flex flex-col gap-3">
        <h2 className="text-cyan-50 text-xl text-center font-semibold">
          Edificate con nosotros
        </h2>
        <p className="text-cyan-100 px-5">
          No importa si estas en tu casa, en tu trabajo o en la carretera,{" "}
          <span className="text-cyan-200 font-semibold">
            Conexion Celestial
          </span>{" "}
          te acompañara con la palabra de Dios y con alabanzas que edificaran tu
          alma.
        </p>
        <h3 className="text-cyan-50 text-lg px-5 font-semibold">
          Descarga nuestra app y mantente conectado con Cristo
        </h3>
        <div className="flex justify-evenly">
          <p className="text-emerald-100 p-2 bg-emerald-600 rounded">
            Play Store
          </p>
          <p className="text-emerald-100 p-2 bg-emerald-600 rounded">
            App Store
          </p>
        </div>
      </section>
      <section className="max-w-2xl flex flex-col gap-3">
        <h2 className="text-cyan-50 text-xl font-semibold text-center">
          Siguenos en nuestras redes sociales
        </h2>
        <ul className="flex justify-evenly">
          <li className="text-emerald-100 px-2 hover:underline">
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li className="text-emerald-100 px-2 hover:underline">
            <a href="https://youtube.com">Youtube</a>
          </li>
        </ul>
      </section>
      <section className="max-w-2xl flex flex-col gap-3">
        <h2 className="text-cyan-50 text-xl font-semibold text-center">
          Te gustaria compartir las buenas nuevas de salvacion?
        </h2>
        <p className="text-emerald-100 px-5">
          Si eres predicador y te gustaria formar parte de nuestra programacion
          ponte en contacto con nosotros y se parte de los que llevan la palabra
          de Dios a cada rincon del mundo.
        </p>
        <article className="p-4 bg-emerald-600 rounded">
          <p className="text-emerald-50">
            Porque la palabra de Dios es locura para los que se pierden, pero
            para los que se salvan, esto es a nosotros, es poder de Dios.
          </p>
          <cite className="text-emerald-200">1 Corintios 1:18.</cite>
        </article>
      </section>
    </main>
  )
}
