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
    <div className="container py-5">

      <h1 className="text-center mb-5 fw-bold">
        🧪 Rick & Morty Explorer
      </h1>

      {/* 🔍 BUSCADOR */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-6">
          <input
            className='form-control form-control-lg shadow-sm'
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
            <div className="card h-100 border-0 shadow-sm text-center card-hover">

              <img 
                src={char.image} 
                alt={char.name} 
                className="card-img-top custom-img"
              />

              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{char.name}</h5>

                  <p className="card-text text-muted mb-2">
                    {char.gender}
                  </p>
                </div>

                <span className={`badge mt-2 align-self-center ${
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
        <p className="text-center mt-5 text-muted">
          No se encontraron personajes
        </p>
      )}

      {/* 🔄 PAGINACIÓN */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">

        <button 
          className="btn btn-dark px-4 w-100 w-md-auto"
          onClick={() => setPage(page - 1)} 
          disabled={!info.prev}
        >
          ⬅ Anterior
        </button>

        <span className="fw-bold">Página {page}</span>

        <button 
          className="btn btn-dark px-4 w-100 w-md-auto"
          onClick={() => setPage(page + 1)} 
          disabled={!info.next}
        >
          Siguiente ➡
        </button>

      </div>

    </div>
  );
};