import DateItem from "./DateItem";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <DateItem date={props.date}></DateItem>
      <div className="exprense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
