import { useState, useEffect } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuthForm } from "../hooks/useAuthForm"

// 🔥 IMPORTANTE (ajusta la ruta si cambia)
import { loginUser, registerUser } from "../../../services/auth"

export const Login = () => {
  const [view, setView] = useState("login")
  const navigate = useNavigate()

  const { values, errors, handleChange, validate } = useAuthForm(view)

  // 🔥 AUTO REDIRECCIÓN SI YA ESTÁ LOGUEADO
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      navigate("/expenses")
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {
      // 🔐 LOGIN
      if (view === "login") {
        const res = await loginUser(values)

         console.log("RESPUESTA LOGIN:", res.data)

        localStorage.setItem("token", res.data.token)

        alert("Inicio de sesión correcto ✅")

        navigate("/expenses") // 🔥 redirección
      }

      // 📝 REGISTER
      if (view === "register") {
        const { email, password } = values

        await registerUser({ email, password })

        alert("Cuenta creada ✅")
        setView("login")
      }

    } catch (error) {
      console.error(error)

      alert(
        error.response?.data?.message ||
        "Error en la petición ❌"
      )
    }
  }

  return (
    <Container maxWidth="sm" className="mt-5">

      <Typography variant="h4" className="mb-3 text-center">
        {view === "login" && "Iniciar Sesión"}
        {view === "register" && "Crear Cuenta"}
        {view === "recover" && "Recuperar Contraseña"}
      </Typography>

      <form onSubmit={handleSubmit}>

        {/* EMAIL */}
        <TextField
          fullWidth
          label="Correo"
          name="email"
          margin="normal"
          onChange={handleChange}
          value={values.email || ""}
          error={!!errors.email}
          helperText={errors.email}
        />

        {/* PASSWORD */}
        {view !== "recover" && (
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            name="password"
            margin="normal"
            onChange={handleChange}
            value={values.password || ""}
            error={!!errors.password}
            helperText={errors.password}
          />
        )}

        {/* CONFIRM PASSWORD */}
        {view === "register" && (
          <TextField
            fullWidth
            label="Confirmar contraseña"
            type="password"
            name="confirmPassword"
            margin="normal"
            onChange={handleChange}
            value={values.confirmPassword || ""}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
        )}

        {/* BOTÓN */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="mt-3"
        >
          {view === "login" && "Entrar"}
          {view === "register" && "Registrarse"}
          {view === "recover" && "Enviar correo"}
        </Button>

      </form>

      {/* LINKS */}
      <div className="text-center mt-3">

        {view === "login" && (
          <>
            <p onClick={() => setView("recover")} style={{ cursor: "pointer" }}>
              ¿Olvidaste tu contraseña?
            </p>
            <p onClick={() => setView("register")} style={{ cursor: "pointer" }}>
              Crear cuenta
            </p>
          </>
        )}

        {view === "register" && (
          <p onClick={() => setView("login")} style={{ cursor: "pointer" }}>
            Ya tengo cuenta
          </p>
        )}

        {view === "recover" && (
          <p onClick={() => setView("login")} style={{ cursor: "pointer" }}>
            Volver al login
          </p>
        )}

      </div>

    </Container>
  )
}