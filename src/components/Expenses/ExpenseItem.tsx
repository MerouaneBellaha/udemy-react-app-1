import React, { FunctionComponent, useState } from "react";

import DateItem from "./DateItem/DateItem";
import Card from "../UI/Card";
import "./ExpenseItem.scss";
import Bem from "../helpers/bem";
import { ExpenseItemProps } from "../types/ExpenseType";

const ExpenseItem: FunctionComponent<ExpenseItemProps> = (props) => {

  const [title, setTitle] = useState(props.expense.title);

  const changeTitleOnClick = () => {
    setTitle("updated");
  };

  const bem = Bem("expense-item");

  return (
    <Card className={bem()}>
      <DateItem date={props.expense.date}></DateItem>
      <div className={bem("description")}>
        <h2>{title}</h2>
        <div className={bem("price")}>{props.expense.amount}</div>
        <button onClick={changeTitleOnClick}>Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
