import { Button, Typography, Box, Container, Paper } from "@mui/material"
import { Link } from "react-router-dom"

export const Content = () => {
  return (
    <Box sx={{ background: "#f1f5f9", minHeight: "100vh" }}>

      {/* HERO + INFO EN GRID */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
            gap: 6,
            alignItems: "center"
          }}
        >
          {/* TEXTO */}
          <Box>
            <Typography variant="h3" fontWeight="bold" mb={3}>
              Control total de tus finanzas 💸
            </Typography>

            <Typography sx={{ color: "#475569", mb: 4 }}>
              Una forma moderna de gestionar tus gastos, entender tu dinero
              y mejorar tu futuro financiero sin complicaciones.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Link to="/login">
                <Button variant="contained" size="large">
                  Empezar ahora
                </Button>
              </Link>

              <a
                href="https://github.com/EstefaGarcia/taller-4-react.git"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outlined" size="large">
                  Ver código
                </Button>
              </a>
            </Box>
          </Box>

          {/* TARJETA RESUMEN */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              background: "#0f172a",
              color: "white"
            }}
          >
            <Typography variant="h6" mb={2}>
              Resumen rápido
            </Typography>

            <Typography>✔ Registra gastos diarios</Typography>
            <Typography>✔ Analiza tus hábitos</Typography>
            <Typography>✔ Mejora tu ahorro</Typography>

            <Box mt={3}>
              <Typography variant="h4" color="#22c55e">
                +25%
              </Typography>
              <Typography variant="body2">
                Mejora promedio en control financiero
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* SECCIÓN TIPO FEATURES */}
      <Box sx={{ py: 10, background: "#ffffff" }}>
        <Container>
          <Typography variant="h4" textAlign="center" mb={6}>
            Lo que puedes hacer
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4,1fr)" },
              gap: 3
            }}
          >
            {[
              "Registrar gastos",
              "Filtrar por categoría",
              "Ver estadísticas",
              "Controlar responsables"
            ].map((item, i) => (
              <Paper
                key={i}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  background: "#f8fafc",
                  transition: "0.3s",
                  '&:hover': {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <Typography fontWeight="bold">{item}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* BLOQUE DIFERENTE (COMPARACIÓN) */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" mb={6}>
          Antes vs Ahora
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4
          }}
        >
          <Paper sx={{ p: 4, borderRadius: 4 }}>
            <Typography variant="h6" mb={2}>❌ Antes</Typography>
            <Typography color="text.secondary">
              Gastos desorganizados, sin control claro y decisiones improvisadas.
            </Typography>
          </Paper>

          <Paper sx={{ p: 4, borderRadius: 4, background: "#dcfce7" }}>
            <Typography variant="h6" mb={2}>✅ Ahora</Typography>
            <Typography>
              Control total, decisiones inteligentes y ahorro constante.
            </Typography>
          </Paper>
        </Box>
      </Container>

      {/* CTA FINAL DIFERENTE */}
      <Box sx={{ py: 10, background: "#0f172a", color: "white" }}>
        <Container textAlign="center">
          <Typography variant="h4" mb={2}>
            Da el siguiente paso 🚀
          </Typography>

          <Typography mb={4} color="#94a3b8">
            Empieza a organizar tu dinero como un profesional
          </Typography>

          <Link to="/login">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#22c55e",
                px: 5,
                borderRadius: 3
              }}
            >
              Comenzar gratis
            </Button>
          </Link>
        </Container>
      </Box>

    </Box>
  )
}