export const Footer = () => {
  return (
    <footer className="container-fluid bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container-fluid px-5">

        <div className="row">

          {/* 🔹 Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">App de Gastos 💸</h5>
            <p className="text-muted">
              Controla tus finanzas de manera fácil y rápida.
            </p>
          </div>

        
          {/* 🔹 Contacto */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contacto</h5>
            <p className="text-white mb-1">📧 correo@email.com</p>
            <p className="text-white">📱 +57 300 000 0000</p>
          </div>

        </div>

        {/* 🔻 Línea inferior */}
        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 - App de Gastos Diarios | Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  )
}