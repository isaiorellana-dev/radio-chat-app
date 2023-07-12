import { message as propsInt } from "../../../interfaces/res"

export default function Message(props: { message: propsInt }) {
  const { message } = props

  return (
    <div>
      <p className="text-left">
        <span className="font-semibold">{message.nickname}: </span>
        {message.body}
      </p>
    </div>
  )
}
