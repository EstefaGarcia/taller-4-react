import express from "express"
import { createExpense, getExpenses, deleteExpense } from "../controllers/expenseController.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

router.post("/", auth, createExpense)
router.get("/", auth, getExpenses)
router.delete("/:id", auth, deleteExpense)

export default router