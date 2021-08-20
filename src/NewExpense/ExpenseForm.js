import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputChangeHandler = event => {
      console.log(event.target.name)
      console.log(event.target.value)
    setUserInput({
        ...userInput,
        [event.name]: event.target.value,
      });
  }
/* 
  const titleChangeHandler = (event) => {
   
    updateSpecificInput("enteredTitle", event.target.value);
  };

  const amountChangeHandler = (event) => {
    updateSpecificInput("enteredAmount", event.target.value);
  };

  const dateChangeHandler = (event) => {
    updateSpecificInput("enteredDate", event.target.value);
  };

  const updateSpecificInput = (name, value) => {
    console.log(name + value);
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }; */

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          name="enteredTitle"
          onChange={inputChangeHandler} type="text" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={inputChangeHandler}
            name="enteredAmount"
            type="number"
            min="O.O1"
            step="O.O1"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={inputChangeHandler}
            name="entereDate"
            type="date"
            min="2019-P1-01"
            max="2022-12-31"
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
