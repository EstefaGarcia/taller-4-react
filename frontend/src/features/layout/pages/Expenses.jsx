import { useEffect, useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  TableContainer
} from "@mui/material"

import {
  createExpense,
  getExpenses,
  deleteExpense
} from "../../../services/expenses"

export default function Expenses() {
  const [expenses, setExpenses] = useState([])

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Comida",
    responsible: "",
    date: new Date().toISOString().slice(0, 10),
    description: ""
  })

  const navigate = useNavigate()

  // 🔐 validar sesión
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) navigate("/login")
  }, [navigate])

  // 📥 cargar gastos
    const loadExpenses = async () => {
  try {
    const res = await getExpenses()
    setExpenses(res.data)
  } catch (error) {
    if (error.response?.status === 401) {
      navigate("/login")
    }
    console.error(error)
  }
}
  useEffect(() => {
  const token = localStorage.getItem("token")

  if (!token) {
    navigate("/login")
    return
  }

  loadExpenses()
}, [navigate])

  // ✅ crear gasto
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.title || !form.amount || !form.category || !form.date || !form.responsible) {
      alert("Completa todos los campos ❌")
      return
    }

    try {
      await createExpense({
        ...form,
        amount: Number(form.amount),
        responsible: form.responsible.trim()
      })

      setForm({
        title: "",
        amount: "",
        category: "Comida",
        responsible: "",
        date: new Date().toISOString().slice(0, 10),
        description: ""
      })

      loadExpenses()

    } catch (error) {
      console.error(error)
      alert("Error al guardar gasto ❌")
    }
  }

  // 🗑 eliminar
  const handleDelete = async (id) => {
    try {
      await deleteExpense(id)
      loadExpenses()
    } catch (error) {
      console.error(error)
    }
  }

  // 🚪 logout
  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  // 💰 total
  const total = useMemo(
    () => expenses.reduce((acc, e) => acc + Number(e.amount), 0),
    [expenses]
  )

  // 📊 resumen dinámico
  const summary = useMemo(() => {
    const data = {}

    expenses.forEach(e => {
      if (!e.responsible) return

      const name = e.responsible.trim().toLowerCase()

      if (!data[name]) data[name] = 0

      data[name] += Number(e.amount)
    })

    return data
  }, [expenses])

  return (
    <Container maxWidth="lg" sx={{ mt: 4, px: { xs: 1, sm: 2 } }}>

      {/* HEADER */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Typography variant="h4">💸 Gastos Diarios</Typography>

        <Button variant="contained" color="error" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>

        {/* FORM + TABLA */}
        <Grid size={{ xs: 12, md: 8 }}>

          {/* FORMULARIO */}
          <Card>
            <CardContent>
              <Typography variant="h6">Registrar gasto</Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ mt: 1 }}>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      type="date"
                      label="Fecha"
                      InputLabelProps={{ shrink: true }}
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      select
                      label="Categoría"
                      value={form.category}
                      onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                      }
                    >
                      <MenuItem value="Comida">Comida</MenuItem>
                      <MenuItem value="Transporte">Transporte</MenuItem>
                      <MenuItem value="Ocio">Ocio</MenuItem>
                    </TextField>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Título"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Valor"
                      type="number"
                      value={form.amount}
                      onChange={(e) =>
                        setForm({ ...form, amount: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Responsable"
                      placeholder="Ej: Carlos"
                      value={form.responsible}
                      onChange={(e) =>
                        setForm({ ...form, responsible: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Descripción"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button type="submit" fullWidth variant="contained">
                      Guardar
                    </Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>

          {/* TABLA RESPONSIVE */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <TableContainer sx={{ overflowX: "auto" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Fecha</b></TableCell>
                      <TableCell><b>Título</b></TableCell>
                      <TableCell><b>Categoría</b></TableCell>
                      <TableCell><b>Valor</b></TableCell>
                      <TableCell><b>Responsable</b></TableCell>
                      <TableCell><b>Acción</b></TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {expenses.map((e) => (
                      <TableRow key={e._id}>
                        <TableCell>{e.date?.slice(0, 10)}</TableCell>
                        <TableCell>{e.title}</TableCell>
                        <TableCell>{e.category}</TableCell>
                        <TableCell>${e.amount}</TableCell>
                        <TableCell>{e.responsible}</TableCell>
                        <TableCell>
                          <Button
                            color="error"
                            variant="outlined"
                            onClick={() => handleDelete(e._id)}
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* RESUMEN */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resumen</Typography>

              <Typography>Total general: ${total}</Typography>

              {Object.entries(summary).map(([name, total]) => (
                <Typography key={name} sx={{ mt: 1 }}>
                  {name.charAt(0).toUpperCase() + name.slice(1)}: ${total}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Container>
  )
}