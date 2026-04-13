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
  TableContainer,
  Box
} from "@mui/material"

import {
  createExpense,
  getExpenses,
  deleteExpense
} from "../services/expenses"

export default function Expenses() {
  const [expenses, setExpenses] = useState([])

  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Transporte",
    responsible: "",
    date: new Date().toISOString().slice(0, 10),
    description: ""
  })

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) navigate("/login")
  }, [navigate])

  const loadExpenses = async () => {
    try {
      const res = await getExpenses()
      setExpenses(res.data)
    } catch (error) {
      if (error.response?.status === 401) navigate("/login")
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return navigate("/login")
    loadExpenses()
  }, [navigate])

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
    } catch {
      alert("Error al guardar gasto ❌")
    }
  }

  const handleDelete = async (id) => {
    await deleteExpense(id)
    loadExpenses()
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  const total = useMemo(
    () => expenses.reduce((acc, e) => acc + Number(e.amount), 0),
    [expenses]
  )

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
    <Box sx={{ background: "#f1f5f9", minHeight: "100vh", py: 5 }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            gap: 2
          }}
        >
          <Typography variant="h4" fontWeight="bold">
             Dashboard de Gastos
          </Typography>

          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
            sx={{ borderRadius: 3 }}
          >
            Cerrar sesión
          </Button>
        </Box>

        {/* RESUMEN ARRIBA */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ borderRadius: 4, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h5" fontWeight="bold">
                  ${total}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {Object.entries(summary).slice(0, 2).map(([name, value]) => (
            <Grid item xs={12} sm={4} key={name}>
              <Card sx={{ borderRadius: 4, textAlign: "center" }}>
                <CardContent>
                  <Typography variant="h6">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Typography>
                  <Typography variant="h6">${value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>

          {/* FORM */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>
                  Nuevo gasto
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                    <Grid item xs={12}>
                      <TextField fullWidth type="date" label="Fecha" InputLabelProps={{ shrink: true }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth select label="Categoría" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        <MenuItem value="Comida">Comida</MenuItem>
                        <MenuItem value="Transporte">Transporte</MenuItem>
                        <MenuItem value="Ocio">Ocio</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth label="Título" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth label="Valor" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth label="Responsable" value={form.responsible} onChange={(e) => setForm({ ...form, responsible: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField fullWidth label="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    </Grid>

                    <Grid item xs={12}>
                      <Button fullWidth type="submit" variant="contained" sx={{ borderRadius: 3 }}>
                        Guardar
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* TABLA */}
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>
                  Historial de gastos
                </Typography>

                <TableContainer sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Título</TableCell>
                        <TableCell>Categoría</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Responsable</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {expenses.map((e) => (
                        <TableRow key={e._id} hover>
                          <TableCell>{e.date?.slice(0, 10)}</TableCell>
                          <TableCell>{e.title}</TableCell>
                          <TableCell>{e.category}</TableCell>
                          <TableCell>${e.amount}</TableCell>
                          <TableCell>{e.responsible}</TableCell>
                          <TableCell>
                            <Button color="error" size="small" onClick={() => handleDelete(e._id)}>
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

        </Grid>
      </Container>
    </Box>
  )
}