import { Link, useLocation } from "react-router-dom"
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material"

export const Header = () => {
  const { pathname } = useLocation()

  const isActive = (path) => pathname === path

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(15, 23, 42, 0.85)", // azul oscuro elegante
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* LOGO */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "white"
          }}
        >
          💸 GastosApp
        </Typography>

        {/* LINKS */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 }
          }}
        >
          {[
            { label: "Inicio", path: "/" },
            { label: "Login", path: "/login" },
            { label: "Gastos", path: "/expenses" },
            { label: "API", path: "/api" }
          ].map((item) => (
            <Link key={item.path} to={item.path} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: isActive(item.path) ? "#22c55e" : "#cbd5f5",
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  transition: "0.3s",
                  '&:hover': {
                    color: "white"
                  }
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}