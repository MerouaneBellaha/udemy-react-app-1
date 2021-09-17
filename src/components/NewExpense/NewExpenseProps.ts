import { ExpenseType } from "../types/ExpenseType";

export type NewExpenseProps = {
    onAddExpense:  (newExpenseData: ExpenseType) => void
}