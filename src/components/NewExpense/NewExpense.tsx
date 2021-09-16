import React, { FunctionComponent } from "react";
import ExpenseForm from "./ExpenseForm";
import Bem from "../helpers/bem";
import './NewExpense.scss'
import { ExpenseDataType } from "./ExpenseDataType";
import { ExpenseFormProps } from "./ExpenseFormProps";

const NewExpense = () => {

    const bem = Bem('new-expense')

    const saveExpenseDataHandler = (newExpenseData: ExpenseDataType) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString
        }
    }

    return (
        <div className={bem()}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;