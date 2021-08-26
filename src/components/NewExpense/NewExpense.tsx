import React from "react";
import ExpenseForm from "./ExpenseForm";
import Bem from "../helpers/bem";
import './NewExpense.scss'

const NewExpense = () => {

    const bem = Bem('new-expense')

    return (
        <div className={bem()}>
            <ExpenseForm></ExpenseForm>
        </div>
    )
};

export default NewExpense;