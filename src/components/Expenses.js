import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  var newFilteredData = props.expenses;
  console.log(props);
  console.log(newFilteredData);
  if (props.yearFilter == "all") {
    newFilteredData = props.expenses;
  } else {
    newFilteredData = props.expenses.filter((item) => {
      return item.date.toString().split(" ")[3] == props.yearFilter;
    });
  }

  return (
    <div>
      {newFilteredData.map((item) => {
        console.log(item);
        return <ExpenseItem expense_info={item} key={item.id} />;
      })}
    </div>
  );
};
export default Expenses;
