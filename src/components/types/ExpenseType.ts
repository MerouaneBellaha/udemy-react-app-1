
export type ExpenseProps = {
    expense: ExpenseType[]
}

export type ExpenseType = {
    id: string
    title: string
    date: Date
    amount: number
}