import { ExpenseDataType } from "./ExpenseDataType";

export type ExpenseFormProps = {
    onSaveExpenseData: (newExpenseData: ExpenseDataType) => void
}
