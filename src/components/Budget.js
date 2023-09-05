import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);

  const handleBudgetChange = (event) => {
    const newBudget = parseFloat(event.target.value);
    const totalExpenses = expenses.reduce((total, item) => {
      return total + item.cost; // Accumulate the total cost
    }, 0); // Initialize total to 0

    console.log(totalExpenses);

    if (!isNaN(newBudget) && newBudget >= totalExpenses) {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
    else
    {
      alert("Cannot decrese the allocation under the amount spent so far");
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        step="10"
      ></input>
    </div>
  );
};
export default Budget;
