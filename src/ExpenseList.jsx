import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  const [filteredExpenses, setFilteredExpenses] = useState([] || expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleSearch = (e) => {
    const solution = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(e.target.value)
    );
    setFilteredExpenses(solution);
  };

  return (
    <>
      <input type="text" onChange={handleSearch} />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => {
          return <ExpenseItem expense={expense} />;
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
