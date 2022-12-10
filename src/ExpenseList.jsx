import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseList = () => {
    const {expenses} = useContext(ExpenseContext)
//   const expenses = [
//     { id: 1, name: "shopping", cost: 22 },
//     { id: 1, name: "clothes", cost: 322 },
//     { id: 1, name: "gasoline", cost: 322 },
//     { id: 1, name: "maintenance", cost: 232 },
//   ];

  return (
    <ul className="list-group mt-3 mb-3">
      {expenses.map((expense) => {
        return <ExpenseItem expense={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
