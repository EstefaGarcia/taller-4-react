import { Link, useLocation } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  Divider
} from "@mui/material"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"

export const Header = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const isActive = (path) => pathname === path

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Login", path: "/login" },
    { label: "Gastos", path: "/expenses" },
    { label: "API", path: "/api" }
  ]

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.7), rgba(34,197,94,0.7))",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.15)"
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
              letterSpacing: "1px",
              color: "white"
            }}
          >
            Api Gastos
          </Typography>

          {/* DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1
            }}
          >
            {links.map((item) => (
              <Link key={item.path} to={item.path} style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    px: 2,
                    borderRadius: "999px",
                    color: isActive(item.path) ? "#0f172a" : "white",
                    background: isActive(item.path)
                      ? "white"
                      : "transparent",
                    fontWeight: "bold",
                    textTransform: "none",
                    transition: "0.3s",
                    '&:hover': {
                      background: "rgba(255,255,255,0.2)"
                    }
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* MOBILE BUTTON */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: "linear-gradient(180deg, #0f172a, #020617)",
            color: "white",
            p: 2
          }
        }}
      >
        <Typography variant="h6" mb={2}>
          Menú
        </Typography>

        <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.1)" }} />

        {links.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{ textDecoration: "none" }}
            onClick={() => setOpen(false)}
          >
            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                mb: 1,
                borderRadius: "10px",
                px: 2,
                py: 1,
                color: isActive(item.path) ? "#22c55e" : "white",
                background: isActive(item.path)
                  ? "rgba(34,197,94,0.15)"
                  : "transparent",
                textTransform: "none",
                '&:hover': {
                  background: "rgba(255,255,255,0.08)"
                }
              }}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </Drawer>
    </>
  )
}