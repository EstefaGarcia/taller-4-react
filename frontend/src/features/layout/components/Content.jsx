import { Button, Typography, Box, Container, Paper } from "@mui/material"
import { Link } from "react-router-dom"

export const Content = () => {
  return (
    <Box sx={{ background: "#f8fafc" }}>

      {/* HERO CLARO */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #e0f2fe, #f0fdf4)"
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            Organiza tus finanzas sin complicaciones 💡
          </Typography>

          <Typography sx={{ mb: 4, color: "#475569" }}>
            Lleva el control de tus ingresos y gastos de forma sencilla, clara y rápida.
            Empieza a tomar mejores decisiones con tu dinero.
          </Typography>

          <Link to="/login">
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 3,
                background: "linear-gradient(135deg, #3b82f6, #22c55e)",
                fontWeight: "bold"
              }}
            >
              Comenzar
            </Button>
          </Link>
        </Container>
      </Box>

      {/* BENEFICIOS */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" mb={6}>
          Ventajas principales
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
            gap: 4
          }}
        >
          {["Control detallado", "Ahorro efectivo", "Uso sencillo"].map((title, i) => (
            <Paper
              key={i}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: "center",
                transition: "0.3s",
                '&:hover': { transform: "translateY(-6px)" }
              }}
            >
              <Typography variant="h6" mb={1}>{title}</Typography>
              <Typography sx={{ color: "#64748b" }}>
                Mejora tu organización financiera con herramientas simples y efectivas.
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* FUNCIONAMIENTO */}
      <Box sx={{ background: "#e2e8f0", py: 10 }}>
        <Container>
          <Typography variant="h4" textAlign="center" mb={6}>
            ¿Cómo funciona?
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
              gap: 4,
              textAlign: "center"
            }}
          >
            <Box>
              <Typography variant="h5">1️⃣ Registra</Typography>
              <Typography>Agrega tus movimientos diarios fácilmente</Typography>
            </Box>

            <Box>
              <Typography variant="h5">2️⃣ Visualiza</Typography>
              <Typography>Consulta tu información organizada</Typography>
            </Box>

            <Box>
              <Typography variant="h5">3️⃣ Mejora</Typography>
              <Typography>Toma mejores decisiones financieras</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* STATS */}
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" mb={4}>Resultados reales</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
            gap: 3
          }}
        >
          <Box>
            <Typography variant="h3" color="primary">+25%</Typography>
            <Typography>Ahorro promedio</Typography>
          </Box>

          <Box>
            <Typography variant="h3" color="primary">+800</Typography>
            <Typography>Usuarios activos</Typography>
          </Box>

          <Box>
            <Typography variant="h3" color="primary">90%</Typography>
            <Typography>Satisfacción</Typography>
          </Box>
        </Box>
      </Container>

      {/* REPOSITORIO */}
      <Box sx={{ background: "#f1f5f9", py: 10, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" mb={2}>Código del proyecto</Typography>
          <Typography mb={3}>
            Explora el código completo en GitHub
          </Typography>

          <a
            href="https://github.com/jordiramirez98/taller-react-4.git"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outlined" size="large">
              Ver repositorio
            </Button>
          </a>
        </Container>
      </Box>

      {/* CTA FINAL */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #3b82f6, #22c55e)",
          color: "white"
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Empieza hoy 🚀
          </Typography>

          <Typography mb={3}>
            Mejora tu control financiero desde ahora
          </Typography>

          <Link to="/login">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "white",
                color: "#0f172a",
                borderRadius: 3,
                px: 4
              }}
            >
              Ir al Login
            </Button>
          </Link>
        </Container>
      </Box>

    </Box>
  )
}