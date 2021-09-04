import ExpenseItem from "../ExpenseItem";
import Card from "../../UI/Card";
import "./Expenses.scss";
import { FunctionComponent } from "react";
import { ExpensesProps } from "./ExpensesProps";
import Bem from "../../helpers/bem";

const Expenses: FunctionComponent<ExpensesProps> = (props) => {
  const bem = Bem("expenses");

  return (
    <Card className={bem()}>
      <h2>Expenses</h2>
      {props.expenses.map((expense) => (
        <ExpenseItem expense={expense}></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
