import { Button, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import heroImg from "../../../assets/hero.jpg"

export const Content = () => {
  return (
    <div>

      {/* 🔥 HERO FULL WIDTH */}
      <div className="container-fluid bg-light py-5">
        <div className="container-fluid px-3 px-md-5">
          <div className="row">

            <div className="col-12 position-relative overflow-hidden">

              <img 
                src={heroImg}
                alt="finanzas"
                className="hero-img img-fluid w-100"
              />

              {/* 🔥 TEXTO ENCIMA */}
              <div className="hero-overlay text-black text-center px-3">
                <h1 className="fw-bold display-6 display-md-5">
                  Controla tus gastos sin estrés 💸
                </h1>

                <p className="lead fs-6 fs-md-5">
                  Organiza tu dinero, ahorra más y toma mejores decisiones financieras
                </p>

                <Link to="/login" className="d-block d-md-inline">
                  <Button 
                    variant="contained" 
                    size="large"
                    fullWidth
                    className="mt-2 mt-md-0"
                  >
                    Comenzar ahora
                  </Button>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* 💡 BENEFICIOS */}
      <div className="container py-5">
        <h2 className="text-center mb-5">¿Por qué usar nuestra app?</h2>

        <div className="row g-4">

          <div className="col-12 col-md-4">
            <Card className="shadow h-100 text-center">
              <CardContent>
                <Typography variant="h5">📊 Control total</Typography>
                <Typography>
                  Visualiza todos tus gastos en un solo lugar
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-4">
            <Card className="shadow h-100 text-center">
              <CardContent>
                <Typography variant="h5">💰 Ahorro inteligente</Typography>
                <Typography>
                  Detecta gastos innecesarios fácilmente
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div className="col-12 col-md-4">
            <Card className="shadow h-100 text-center">
              <CardContent>
                <Typography variant="h5">⚡ Rápido y simple</Typography>
                <Typography>
                  Registra gastos en segundos
                </Typography>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* ⚙️ CÓMO FUNCIONA */}
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">¿Cómo funciona?</h2>

          <div className="row mt-4">

            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h4>1️⃣ Registra</h4>
              <p>Agrega tus gastos diarios fácilmente</p>
            </div>

            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h4>2️⃣ Analiza</h4>
              <p>Revisa tus hábitos de consumo</p>
            </div>

            <div className="col-12 col-md-4">
              <h4>3️⃣ Mejora</h4>
              <p>Ahorra y optimiza tu dinero</p>
            </div>

          </div>
        </div>
      </div>

      {/* 📈 ESTADÍSTICAS */}
      <div className="container py-5 text-center">
        <h2>Impacto en usuarios</h2>

        <div className="row mt-4">

          <div className="col-12 col-md-4 mb-3">
            <h3 className="text-primary">+30%</h3>
            <p>Ahorro mensual</p>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <h3 className="text-primary">+1,000</h3>
            <p>Usuarios activos</p>
          </div>

          <div className="col-12 col-md-4">
            <h3 className="text-primary">95%</h3>
            <p>Satisfacción</p>
          </div>

        </div>
      </div>

      {/* 🧑‍💻 REPOSITORIO */}
      <div className="container py-5 text-center">
        <h2>📂 Código del proyecto</h2>
        <p>Puedes ver el código completo en GitHub</p>

        <a 
          href="https://github.com/yonier321/gastos-app" 
          target="_blank" 
          rel="noreferrer"
        >
          <Button variant="outlined" size="large">
            Ver repositorio
          </Button>
        </a>
      </div>

      {/* 🚀 CTA FINAL */}
      <div className="container-fluid bg-primary text-white text-center py-5">
        <div className="container px-3">
          <h2 className="fs-4 fs-md-2">Empieza a controlar tus gastos hoy 🚀</h2>
          <p>No esperes más para mejorar tus finanzas</p>

          <Link to="/login" className="d-block d-md-inline">
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              fullWidth
            >
              Ir al Login
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}