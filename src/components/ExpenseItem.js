import "./ExpenseItem.css";
const format = (date) => {
  return date.toString();
};
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>{format(props.expense_info.date)}</div>
      <div className="expense-item__description">
        <h2>{props.expense_info.title} </h2>
        <div className="expense-item__price ">{props.expense_info.amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
