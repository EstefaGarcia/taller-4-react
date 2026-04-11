import { useState } from "react"

export const useAuthForm = (type) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let newErrors = {}

    // Email
    if (!values.email.includes("@")) {
      newErrors.email = "Correo inválido"
    }

    // Password
    if (values.password.length < 6) {
      newErrors.password = "Mínimo 6 caracteres"
    }

    // Confirmación solo en registro
    if (type === "register" && values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return {
    values,
    errors,
    handleChange,
    validate
  }
}