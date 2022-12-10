import React, {useContext} from "react";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(ExpenseContext)
  
  const spent = expenses.reduce((total, expense) => {
    return total += expense.cost
  },0)

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${spent}</span>
    </div>
  );
};

export default ExpenseTotal;
