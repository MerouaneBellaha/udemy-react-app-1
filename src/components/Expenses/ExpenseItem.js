import React, { useState } from "react";

import DateItem from "./DateItem";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  /* this shits hook, hook starts with use, can only be called inside React component function 
  should have pass props.title
  return an array of 2 items [value, udpating function]
   -> array destructuring const [naming returned items in array] = function(): []
   const [describedValue, setDescribedValue] convention
  */

  const [title, setTitle] = useState(props.expense.title)

  /* default naming : const clickHandler = () => {  ----> updated ??*/
    const changeTitleOnClick = () => {
    setTitle('updated')
  }

  return (
    <Card className='expense-item'>
      <DateItem date={props.expense.date}></DateItem>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.expense.amount}</div>
        <button onClick={changeTitleOnClick}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
