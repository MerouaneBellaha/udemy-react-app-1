import React, { FunctionComponent } from "react";
import ExpenseForm from "./ExpenseForm";
import Bem from "../helpers/bem";
import './NewExpense.scss'
import { ExpenseDataType } from "./ExpenseDataType";
import { ExpenseFormProps } from "./ExpenseFormProps";
import { ExpenseType } from "../types/ExpenseType";
import { NewExpenseProps } from "./NewExpenseProps";

const NewExpense: FunctionComponent<NewExpenseProps> = (props) => {

    const bem = Bem('new-expense')

    const saveExpenseDataHandler = (newExpenseData: ExpenseDataType) => {
        const expenseData: ExpenseType = {
            ...newExpenseData,
            amount: parseFloat(newExpenseData.amount),
            id: Math.random().toFixed()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className={bem()}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;