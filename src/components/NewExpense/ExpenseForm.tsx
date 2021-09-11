import React, { ChangeEvent, Component, FormEvent, useState } from "react";
import "./ExpenseForm.scss";
import Bem from "../helpers/bem";
import { ExpenseDataType } from "./ExpenseDataType";

const ExpenseForm = () => {
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
          />
        </div>

        <div className={bem("control")}>
          <label>Amount</label>
          <input
            onChange={inputChangeHandler}
            name='enteredAmount'
            type='number'
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
