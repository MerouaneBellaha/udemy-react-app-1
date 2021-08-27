import React, { FunctionComponent, useState } from "react";

import DateItem from "./DateItem";
import Card from "../UI/Card";
import "./ExpenseItem.scss";
import Bem from "../helpers/bem";
import { ExpenseProps, ExpenseType } from "../types/ExpenseType";


const ExpenseItem: FunctionComponent<ExpenseProps> = (props) => {

/*   const ExpenseItem = (props: ExpenseProps) => { */

  /* this shits hook, hook starts with use, can only be called inside React component function 
  return an array of 2 items [value, udpating function]
   -> array destructuring const [naming returned items in array] = function(): []
   const [describedValue, setDescribedValue] convention
  */
  const expense: ExpenseType = props.expense as ExpenseType

/*   const [title, setTitle] = useState((props.expense as ExpenseType).title) */
const [title, setTitle] = useState(expense.title)

  const changeTitleOnClick = () => {
    setTitle('updated')
  }

  const bem = Bem('expense-item')

  return (
    <Card className={bem()}>
      <DateItem date={expense.date}></DateItem>
      <div className={bem('description')}>
        <h2>{title}</h2>
        <div className={bem('price')}>{expense.amount}</div>
        <button onClick={changeTitleOnClick}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
