import React, { useState } from "react";

import DateItem from "./DateItem";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  /* this shits hook, hook starts with use, can only be called inside React component function 
  should be pass props.title
  return an array
  [value, udpating function]
   -> array destructuring const[naming returned items in array]
   const [describedValue, setDescribedValue] convention
  */
  const [title, setTitle] = useState('title')


  /* naming is :/ doThisClickHandler() */
  const clickHandler = () => {
    setTitle('updated')
  }

  return (
    <Card className='expense-item'>
      <DateItem date={props.date}></DateItem>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
