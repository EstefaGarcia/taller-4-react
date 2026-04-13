import { useState, useEffect } from "react"
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuthForm } from "../hooks/useAuthForm"
import { loginUser, registerUser } from "../../../services/auth"

export const Login = () => {
  const [view, setView] = useState("login")
  const navigate = useNavigate()

  const { values, errors, handleChange, validate } = useAuthForm(view)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) navigate("/expenses")
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {
      if (view === "login") {
        const res = await loginUser(values)
        localStorage.setItem("token", res.data.token)
        navigate("/expenses")
      }

      if (view === "register") {
        const { email, password } = values
        await registerUser({ email, password })
        setView("login")
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error ❌")
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a, #0ea5e9)"
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            background: "#1e293b",
            color: "white"
          }}
        >
          {/* TITULO */}
          <Box textAlign="center" mb={3}>
            <Typography variant="h4" fontWeight="bold">
              💸Api Gastos
            </Typography>

            <Typography variant="body2" color="#94a3b8">
              {view === "login"
                ? "Inicia sesión para continuar"
                : view === "register"
                ? "Crea tu cuenta rápidamente"
                : "Recupera tu acceso"}
            </Typography>
          </Box>

          {/* FORM */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Correo"
              name="email"
              margin="normal"
              onChange={handleChange}
              value={values.email || ""}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                input: { color: "white" },
                label: { color: "#94a3b8" }
              }}
            />

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
                sx={{
                  input: { color: "white" },
                  label: { color: "#94a3b8" }
                }}
              />
            )}

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
                sx={{
                  input: { color: "white" },
                  label: { color: "#94a3b8" }
                }}
              />
            )}

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.3,
                borderRadius: 3,
                background: "#22c55e",
                color: "white",
                fontWeight: "bold",
                '&:hover': {
                  background: "#16a34a"
                }
              }}
            >
              {view === "login" && "Entrar"}
              {view === "register" && "Registrarse"}
              {view === "recover" && "Enviar correo"}
            </Button>
          </form>

          {/* LINKS */}
          <Box mt={3} textAlign="center">
            {view === "login" && (
              <>
                <Typography
                  sx={{ cursor: "pointer", color: "#38bdf8" }}
                  onClick={() => setView("recover")}
                >
                  ¿Olvidaste tu contraseña?
                </Typography>

                <Typography
                  sx={{ cursor: "pointer", mt: 1, color: "#22c55e" }}
                  onClick={() => setView("register")}
                >
                  Crear cuenta
                </Typography>
              </>
            )}

            {view === "register" && (
              <Typography
                sx={{ cursor: "pointer", color: "#38bdf8" }}
                onClick={() => setView("login")}
              >
                Ya tengo cuenta
              </Typography>
            )}

            {view === "recover" && (
              <Typography
                sx={{ cursor: "pointer", color: "#38bdf8" }}
                onClick={() => setView("login")}
              >
                Volver
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}