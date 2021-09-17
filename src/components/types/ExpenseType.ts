export type ExpenseType = {
    title: string
    date: Date
    amount: number
    id: string
}

export type ExpenseItemProps = {
    expense: ExpenseType
}