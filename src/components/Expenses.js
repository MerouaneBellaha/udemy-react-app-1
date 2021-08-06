import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

  return (
    <div className="expense-date">
      <h2>Expenses</h2>
        <ExpenseItem {...props[0]}></ExpenseItem>   
        <ExpenseItem {...props[1]}></ExpenseItem>   
    </div>
  );
}

export default Expenses;
