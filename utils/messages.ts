import axios from "axios"

const tokenDev =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjEsIk5pY2tuYW1lIjoiSXNhaSIsIlJvbElEIjozLCJleHAiOjE2ODkxODk3OTB9.n8-DbYk1vTk1vfvRPEIurnDax-1duQO31J-3QtdDGlY"

const tokenAdmin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjE5LCJOaWNrbmFtZSI6IlBlZHJvIiwiUm9sSUQiOjEsImV4cCI6MTY4OTE5MDczOX0.wEEmKYr7RJ3jcbefBZA_vCudRKkDbRU0HCaDX42knWM"

const API_URL = "http://localhost:5050/api/v1"

export const getHelloWorld = () => {
  axios
    .get(API_URL + "/hello", {
      headers: {
        Authorization: `Bearer ${tokenAdmin}`,
      },
    })
    .then(function (res) {
      console.log("response", res.data) // handle success here
    })
}

export const getMessages = () => {
  return axios
    .get(API_URL + "/messages", {
      headers: {
        Authorization: `Bearer ${tokenAdmin}`,
      },
    })
    .then((res) => {
      // console.log(res.data)
      return res.data
    })
}
