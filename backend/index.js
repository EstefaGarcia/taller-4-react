import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

import mongoose from "mongoose"
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err))


import authRoutes from "./routes/authRoutes.js"
import expenseRoutes from "./routes/expenseRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth", authRoutes)
app.use("/api/expenses", expenseRoutes)

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000 🚀")
})