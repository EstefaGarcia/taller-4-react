import { useState, useEffect } from "react"
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
  InputAdornment
} from "@mui/material"
import { Mail, Lock } from "lucide-react"
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
        background: "linear-gradient(135deg, #0f172a, #1e293b)"
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            borderRadius: 5,
            overflow: "hidden"
          }}
        >
          {/* LADO IZQUIERDO (DISEÑO) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #6366f1, #22c55e)",
              color: "white",
              p: 4
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              {view === "login" ? "Hola 👋" : "Únete 🚀"}
            </Typography>

            <Typography mt={2} textAlign="center">
              {view === "login"
                ? "Gestiona tus gastos de forma inteligente"
                : "Crea tu cuenta en segundos"}
            </Typography>
          </Box>

          {/* FORMULARIO */}
          <Box
            sx={{
              p: { xs: 3, sm: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={2}>
              {view === "login" && "Iniciar sesión"}
              {view === "register" && "Crear cuenta"}
              {view === "recover" && "Recuperar"}
            </Typography>

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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail size={18} />
                    </InputAdornment>
                  )
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock size={18} />
                      </InputAdornment>
                    )
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
                />
              )}

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.3,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #6366f1, #22c55e)",
                  fontWeight: "bold"
                }}
              >
                {view === "login" && "Entrar"}
                {view === "register" && "Registrarse"}
                {view === "recover" && "Enviar correo"}
              </Button>
            </form>

            <Box mt={3} textAlign="center">
              {view === "login" && (
                <>
                  <Typography
                    sx={{ cursor: "pointer", mb: 1 }}
                    onClick={() => setView("recover")}
                  >
                    ¿Olvidaste tu contraseña?
                  </Typography>

                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => setView("register")}
                  >
                    Crear cuenta
                  </Typography>
                </>
              )}

              {view === "register" && (
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => setView("login")}
                >
                  Ya tengo cuenta
                </Typography>
              )}

              {view === "recover" && (
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={() => setView("login")}
                >
                  Volver
                </Typography>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}