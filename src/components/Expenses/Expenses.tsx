import ExpenseItem from "./ExpenseItem";
import Card  from "../UI/Card";
import "./Expenses.css";
import { FunctionComponent } from "react";
import { ExpenseProps } from "../types/ExpenseType";

const Expenses: FunctionComponent<ExpenseProps> = (props) => {

  return (
    <Card className='expenses'>
      <h2>Expenses</h2>
         { props.expense.map((expense) =>
         <ExpenseItem expense={expense}></ExpenseItem>
         )}
    </Card>
  ); 
}

export default Expenses;
