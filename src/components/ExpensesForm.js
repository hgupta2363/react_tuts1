import { useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });
  const [showform, setShowform] = useState(false);
  const handleTitle = (e) => {
    setFormData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const handleAmount = (e) => {
    setFormData((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const handleDate = (e) => {
    setFormData((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    props.addNewToList(formData);
    toggleState();
  };
  const toggleState = () => {
    if (showform == true) {
      setShowform(false);
    } else {
      setShowform(true);
    }
  };

  return (
    <div className="new-expense">
      {showform == false ? (
        <div className="new-expense__actions">
          <button onClick={toggleState}>Add Expenses</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label> title</label>
              <input type="text" onChange={handleTitle} />
            </div>
            <div className="new-expense__control">
              <label>amount</label>
              <input type="text" onChange={handleAmount} />
            </div>
            <div className="new-expense__control">
              <label> date</label>
              <input type="date" onChange={handleDate} />
            </div>
            <div className="new-expense__actions">
              <button type="submit">Add Expenses</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
export default ExpenseForm;
