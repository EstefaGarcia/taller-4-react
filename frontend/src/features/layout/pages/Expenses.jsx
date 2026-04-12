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
    <Box sx={{ background: "#f8fafc", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            gap: 2
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            💸 Panel de Gastos
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ borderRadius: 3 }}
          >
            Cerrar sesión
          </Button>
        </Box>

        <Grid container spacing={3}>

          {/* FORM + TABLA */}
          <Grid size={{ xs: 12, md: 8 }}>

            {/* FORM */}
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>
                  Nuevo gasto
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth type="date" label="Fecha" InputLabelProps={{ shrink: true }} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth select label="Categoría" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                        <MenuItem value="Comida">Comida</MenuItem>
                        <MenuItem value="Transporte">Transporte</MenuItem>
                        <MenuItem value="Ocio">Ocio</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Título" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Valor" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Responsable" value={form.responsible} onChange={(e) => setForm({ ...form, responsible: e.target.value })} />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Descripción" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Button type="submit" fullWidth variant="contained" sx={{ borderRadius: 3, py: 1.2 }}>
                        Guardar gasto
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>

            {/* TABLA */}
            <Card sx={{ mt: 3, borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>Historial</Typography>

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

          {/* RESUMEN */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: 4 }}>
              <CardContent>
                <Typography variant="h6" mb={2}>Resumen</Typography>

                <Typography fontWeight="bold" mb={1}>
                  Total: ${total}
                </Typography>

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
    </Box>
  )
}