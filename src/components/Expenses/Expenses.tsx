import ExpenseItem from "./ExpenseItem";
import Card  from "../UI/Card";
import "./Expenses.scss";
import { FunctionComponent } from "react";
import { ExpenseProps, ExpenseType } from "../types/ExpenseType";
import Bem from "../helpers/bem";

const Expenses: FunctionComponent<ExpenseProps> = (props) => {

  const bem = Bem('expenses')

  return (
    <Card className={bem()}>
      <h2>Expenses</h2>
         { (props.expenses as ExpenseType[]).map((expense) =>
         <ExpenseItem expenses={[expense]}></ExpenseItem>
         )}
    </Card>
  ); 
}

export default Expenses;
