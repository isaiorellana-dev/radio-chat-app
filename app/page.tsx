export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-6 py-8 px-5">
        <section className="max-w-2xl flex flex-col gap-3">
          <h1 className="text-cyan-50 text-2xl text-center font-semibold">
            Bienvenido a la radio que te conecta con Cristo
          </h1>
          <article className="p-4 bg-emerald-600 rounded">
            <p className="text-emerald-50">
              Porque así nos ha mandado el Señor, diciendo: Te he puesto para
              luz de los gentiles, A fin de que seas para salvación hasta lo
              último de la tierra.
            </p>
            <cite className="text-emerald-200">Hechos 13:47.</cite>
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
            te acompañara con la palabra de Dios y con alabanzas que edificaran
            tu alma.
          </p>
          <h3 className="text-cyan-50 text-lg px-5 font-semibold">
            Descarga nuestra app y mantente conectado con Cristo
          </h3>
          <div className="flex justify-evenly">
            <a
              className="text-emerald-100 p-2 bg-emerald-600 rounded"
              href="https://play.google.com/store/apps/details?id=conexion.celestialradio2&hl=es_419&gl=HN&pli=1"
              target="_blank"
            >
              Play Store
            </a>
            <a
              className="text-emerald-100 p-2 bg-cyan-600 rounded"
              href="https://apps.apple.com/us/app/mytuner-radio-live-stations/id520502858"
              target="_blank"
            >
              App Store
            </a>
          </div>
        </section>
        <section className="max-w-2xl flex flex-col gap-3">
          <h2 className="text-cyan-50 text-xl font-semibold text-center">
            Siguenos en nuestras redes sociales
          </h2>
          <ul className="flex justify-evenly">
            <li className="text-emerald-100 px-2 hover:underline">
              <a
                href="https://www.facebook.com/profile.php?id=100072200978943"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li className="text-emerald-100 px-2 hover:underline">
              <a
                href="https://api.whatsapp.com/send/?phone=50498474931&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-emerald-100 px-2 hover:underline">
              <a
                href="https://www.youtube.com/channel/UCqp9JFdI0ZntwVnLcTs-4HQ"
                target="_blank"
              >
                Youtube
              </a>
            </li>
          </ul>
        </section>
        <section className="max-w-2xl flex flex-col gap-3">
          <h2 className="text-cyan-50 text-xl font-semibold text-center">
            Te gustaria compartir las buenas nuevas de salvacion?
          </h2>
          <p className="text-emerald-100 px-5">
            Si eres predicador y te gustaria formar parte de nuestra
            programacion ponte en contacto con nosotros y se parte de los que
            llevan la palabra de Dios a cada rincon del mundo.
          </p>
          <article className="p-4 bg-emerald-600 rounded">
            <p className="text-emerald-50">
              Y les dijo: Id por todo el mundo y predicad el evangelio a toda
              criatura.
            </p>
            <cite className="text-emerald-200">Marcos 16:15.</cite>
          </article>
        </section>
      </main>
      <footer className="w-full bg-cyan-800 p-2">
        <p className="text-cyan-50 text-center">
          Conexion Celestial Radio - 2023
        </p>
      </footer>
    </>
  )
}
