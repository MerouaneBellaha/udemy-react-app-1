import { FunctionComponent } from "react";
import Bem from "src/components/helpers/bem";
import "./DateItem.scss";
import { DateItemProps } from "./DateItemProps";

const DateItem: FunctionComponent<DateItemProps>  = (props) => {
  
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  const bem = Bem('expense-date')

  return (
    <div className={bem()}>
      <div className={bem('month')}>{month}</div>
      <div className={bem('year')}>{year}</div>
      <div className={bem('day')}>{day}</div>
    </div>
  );
}

export default DateItem;