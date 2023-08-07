import { message as propsInt } from "../../../interfaces/res"

export default function Message(props: { message: propsInt; index: number }) {
  const { message, index } = props

  const esPar = (n: number): boolean => n % 2 === 0

  return (
    <div
      className={
        esPar(index)
          ? "bg-slate-700 w-full max-w-xl"
          : "bg-slate-800 w-full max-w-xl"
      }
    >
      <p className="text-left text-cyan-100 px-0.5">
        <span className="font-semibold text-cyan-50">{message.nickname}: </span>
        {message.body}
      </p>
    </div>
  )
}
