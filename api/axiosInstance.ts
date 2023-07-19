import axios from "axios"

const API_URL = "http://localhost:5050/api/v1"
const tokenAdmin =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjE5LCJOaWNrbmFtZSI6IlBlZHJvIiwiUm9sSUQiOjEsImV4cCI6MTY4OTg4OTk2NX0.C-h1m7Y-PHdNDFkHAdXlIcoehaPATDfrncZNRS-TDUA"

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${tokenAdmin}`,
  },
})
