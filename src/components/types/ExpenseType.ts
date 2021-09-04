export type ExpenseType = {
    id: string
    title: string
    date: Date
    amount: number
}

export type ExpenseItemProps = {
    expense: ExpenseType
}