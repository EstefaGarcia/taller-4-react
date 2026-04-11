import API from "../api"

// 📥 obtener gastos
export const getExpenses = () => API.get("/expenses")

// ➕ crear gasto
export const createExpense = (data) => API.post("/expenses", data)

// 🗑 eliminar gasto (🔥 ESTE ES EL QUE TE FALTA)
export const deleteExpense = (id) => API.delete(`/expenses/${id}`)