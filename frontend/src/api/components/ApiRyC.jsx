import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const ApiRyC_Axios = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source()

    axios.get('https://rickandmortyapi.com/api/character/', {
      params: { page, name: query },
      cancelToken: source.token
    })
      .then(({ data }) => {
        setData(data.results || [])
        setInfo(data.info || {})
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        if (err.response?.status === 404) {
          setData([])
          setInfo({})
          return
        }
        console.error(err)
      });

    return () => source.cancel()
  }, [page, query]);

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        color: "white"
      }}
    >

      <div className="container">

        <h1 className="text-center mb-5 fw-bold">
          🧪 Rick & Morty Explorer
        </h1>

        {/* 🔍 BUSCADOR */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6">
            <input
              className='form-control form-control-lg'
              style={{
                borderRadius: "12px",
                background: "#1e293b",
                color: "white",
                border: "1px solid #334155"
              }}
              placeholder='Buscar personaje...'
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
            />
          </div>
        </div>

        {/* 🧩 CARDS */}
        <div className="row g-4">
          {data?.map(char => (
            <div key={char.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 text-center"
                style={{
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "0.3s",
                  color: "white"
                }}
              >

                <img 
                  src={char.image} 
                  alt={char.name} 
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">
                  <h5 className="fw-bold">{char.name}</h5>

                  <p style={{ opacity: 0.7 }}>
                    {char.gender}
                  </p>

                  <span className={`badge ${
                    char.status === "Alive" ? "bg-success" :
                    char.status === "Dead" ? "bg-danger" :
                    "bg-secondary"
                  }`}>
                    {char.status}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ⚠️ SIN RESULTADOS */}
        {data.length === 0 && (
          <p className="text-center mt-5" style={{ opacity: 0.6 }}>
            No se encontraron personajes
          </p>
        )}

        {/* 🔄 PAGINACIÓN */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">

          <button 
            className="btn btn-outline-light px-4 w-100 w-md-auto"
            onClick={() => setPage(page - 1)} 
            disabled={!info.prev}
          >
            ⬅ Anterior
          </button>

          <span className="fw-bold">Página {page}</span>

          <button 
            className="btn btn-outline-light px-4 w-100 w-md-auto"
            onClick={() => setPage(page + 1)} 
            disabled={!info.next}
          >
            Siguiente ➡
          </button>

        </div>

      </div>
    </div>
  );
};