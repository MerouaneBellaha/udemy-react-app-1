import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from "react";
import "./ExpenseForm.scss";
import Bem from "../helpers/bem";
import { ExpenseDataType } from "./ExpenseDataType";
import { ExpenseFormProps } from "./ExpenseFormProps";

const ExpenseForm: FunctionComponent<ExpenseFormProps> = (props) => {
  const bem = Bem("new-expense");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((previousState) => {
      return { 
        ...previousState,
        [event.target.name]: event.target.value}
    })
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const expenseData: ExpenseDataType = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }
    resetInputs()
    props.onSaveExpenseData(expenseData)
  }

  const resetInputs = () => {
    setUserInput((_) => {
      return {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
      }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={bem("controls")}>
        <div className={bem("control")}>
          <label>Title</label>
          <input
            name='enteredTitle'
            onChange={inputChangeHandler}
            type='text'
            value={userInput.enteredTitle}
          />
        </div>

        <div className={bem("control")}>
          <label>Amount</label>
          <input
            onChange={inputChangeHandler}
            name='enteredAmount'
            type='number'
            value={userInput.enteredAmount}
            min='O.O1'
            step='O.O1'
          />
        </div>

        <div className={bem("control")}>
          <label>Date</label>
          <input
            onChange={inputChangeHandler}
            name='enteredDate'
            type='date'
            value={userInput.enteredDate}
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>

        <div className={bem("actions")}>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
