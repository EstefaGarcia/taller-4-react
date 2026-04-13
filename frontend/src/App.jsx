import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import { ApiRyC_Axios } from './api/components/ApiRyC'
import  {Login}  from './features/auth/components/Login'
import { Toolbar } from "@mui/material"
import Expenses from './dashboard/Expenses'

function App() {
  return (
    <HashRouter>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        <Header />
        <Toolbar />

        {/* 🔥 CONTENIDO CRECE */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/login" element={<Login />} />
            <Route path="/expenses" element={< Expenses />} />
            <Route path='/api' element={<ApiRyC_Axios/>}/>
          </Routes>
        </div>

        <Footer />

      </div>

    </HashRouter>
  )
}

export default App