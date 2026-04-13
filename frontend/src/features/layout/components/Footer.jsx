export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "60px",
        background: "#0f172a",
        color: "white"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px"
        }}
      >

        {/* 🔝 PARTE SUPERIOR */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginBottom: "40px"
          }}
        >

          {/* APP + DESCRIPCIÓN */}
          <div>
            <h2 style={{ marginBottom: "10px" }}> Api Gastos</h2>
            <p style={{ opacity: 0.7, maxWidth: "500px" }}>
              Una herramienta simple para gestionar tus finanzas, visualizar tus gastos
              y mejorar tu control económico día a día.
            </p>
          </div>

          {/* BLOQUES EN FILA */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "space-between"
            }}
          >

            {/* AUTOR */}
            <div style={{ minWidth: "200px" }}>
              <h4>👩‍💻 Autor</h4>
              <p style={{ opacity: 0.8 }}>Estefanía Echeverry</p>
              <p style={{ opacity: 0.6, fontSize: "14px" }}>
                Desarrollo del sistema de gestión de gastos.
              </p>
            </div>

            {/* CONTACTO */}
            <div style={{ minWidth: "200px" }}>
              <h4>📞 Contacto</h4>
              <p style={{ opacity: 0.8 }}>correo@email.com</p>
              <p style={{ opacity: 0.8 }}>+57 300 000 0000</p>
            </div>

            {/* TECNOLOGÍA */}
            <div style={{ minWidth: "200px" }}>
              <h4>⚙️ Tecnologías</h4>
              <p style={{ opacity: 0.7 }}>React</p>
              <p style={{ opacity: 0.7 }}>Material UI</p>
              <p style={{ opacity: 0.7 }}>Axios</p>
            </div>

          </div>
        </div>

        {/* 🔻 PARTE INFERIOR */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <span style={{ opacity: 0.7, fontSize: "14px" }}>
            © 2026 App de Gastos Diarios
          </span>

          <span style={{ opacity: 0.5, fontSize: "13px" }}>
            Desarrollado por Estefanía Echeverry
          </span>
        </div>

      </div>
    </footer>
  )
}