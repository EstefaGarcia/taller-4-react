import Expense from "../models/Expense.js"

// ✅ CREAR
export const createExpense = async (req, res) => {
  try {
    const {
      title,
      amount,
      category,
      responsible,
      date,
      description
    } = req.body

    const expense = new Expense({
      title,
      amount,
      category,
      responsible,
      date,
      description,
      user: req.user
    })

    await expense.save()

    res.status(201).json(expense)

  } catch (error) {
    res.status(500).json({ message: "Error al crear gasto" })
  }
}

// ✅ OBTENER
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user })
    res.json(expenses)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener gastos" })
  }
}

// ✅ ELIMINAR (🔥 ESTE TE FALTA)
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params

    const expense = await Expense.findById(id)

    if (!expense) {
      return res.status(404).json({ message: "Gasto no encontrado" })
    }

    // 🔐 seguridad: solo el dueño puede borrar
    if (expense.user.toString() !== req.user.toString()) {
      return res.status(401).json({ message: "No autorizado" })
    }

    await expense.deleteOne()

    res.json({ message: "Gasto eliminado correctamente" })

  } catch (error) {
    res.status(500).json({ message: "Error al eliminar gasto" })
  }
  console.log(req.body)
}