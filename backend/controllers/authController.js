import User from "../models/User.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
  const { email, password } = req.body

  const hashed = await bcrypt.hash(password, 10)

  const user = new User({ email, password: hashed })
  await user.save()

  res.json({ message: "Usuario creado" })
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: "No existe" })

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) return res.status(400).json({ message: "Contraseña incorrecta" })

const token = jwt.sign(
  { id: user._id }, // 🔥 CLAVE
  "secret",
  { expiresIn: "1d" }
)
  res.json({ token })
}