import { Link } from "react-router-dom"
import { AppBar, Toolbar, Button, Typography } from "@mui/material"

export const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(6px)"
      }}
    >
      <Toolbar className="d-flex justify-content-between">

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Gastos Diarios 💸
        </Typography>

        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button color="inherit">Inicio</Button>
          </Link>

          <Link to="api_axios" style={{ textDecoration: "none" }}>
            <Button color="inherit">Api Axios</Button>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="inherit">Login</Button>
          </Link> 

          <Link to="/expenses" style={{ textDecoration: "none" }}>
            <Button color="inherit">Gastos</Button>
          </Link>

          
        </div>

      </Toolbar>
    </AppBar>
  )
}