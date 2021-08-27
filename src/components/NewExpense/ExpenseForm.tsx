import React, { useState } from "react";
import "./ExpenseForm.scss";
import Bem from "../helpers/bem";
import { InputChangeEvent } from "../types/InputChangeEvent";

const ExpenseForm = () => {

  const bem = Bem('new-expense')

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = (event: InputChangeEvent<HTMLInputElement>) => {
    setUserInput({
        ...userInput,
        [event.name as string]: event.target.value,
      });
  }

  return (
    <form>
      <div className={bem('controls')}>
        <div className={bem('control')}>
          <label>Title</label>
          <input 
          name="enteredTitle"
          onChange={inputChangeHandler} type="text" />
        </div>

        <div className={bem('control')}>
          <label>Amount</label>
          <input
            onChange={inputChangeHandler}
            name="enteredAmount"
            type="number"
            min="O.O1"
            step="O.O1"
          />
        </div>

        <div className={bem('control')}>
          <label>Date</label>
          <input
            onChange={inputChangeHandler}
            name="entereDate"
            type="date"
            min="2019-P1-01"
            max="2022-12-31"
          />
        </div>

        <div className={bem('actions')}>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
