import axios from "axios"

const API = axios.create({
  baseURL: "https://gastos-app-3.onrender.com/api" // 🔥 AQUÍ
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default API