import ExpenseItem from "./ExpenseItem";
import Card  from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {

  return (
    <Card className='expenses'>
      <h2>Expenses</h2>
{/*  why props[0] is undefined ? How to pass an array as props from parent component */}
        <ExpenseItem expense={props.expenses[0]}></ExpenseItem>   
        <ExpenseItem expense={props.expenses[1]}></ExpenseItem>   
    </Card>
  );
}

export default Expenses;
