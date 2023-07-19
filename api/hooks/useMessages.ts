import { axiosInstance } from "@/api/axiosInstance"
import { message } from "@/interfaces/res"

const useMessages = () => {
  const getMessages = async (): Promise<Array<message>> => {
    const res = await axiosInstance.get("/messages").then((res) => res.data)
    return res
  }

  const sendMessage = async (text: string) => {
    if (text != "") {
      await axiosInstance
        .post("/messages", { body: text })
        .then(() => {
          console.log("Mensaje enviado")
        })
        .catch(() => {
          console.log("error")
        })
    }
  }

  return { getMessages, sendMessage }
}

export default useMessages
