import DateItem from "./DateItem";
import Card from "./Card";
import "./ExpenseItem.css";


function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <DateItem date={props.date}></DateItem>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
