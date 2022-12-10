import React, {useContext} from "react";
import { TiDelete } from "react-icons/ti";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const {dispatch} = useContext(ExpenseContext)

 const handleDelete = () => {
  dispatch({type: "DELETE_EXPENSE", payload: expense.id})
 }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <div>
        <span className="badge-primary badge-pill mr-3">${expense.cost}</span>
      </div>
      <TiDelete onClick={handleDelete} size="1.5em"  />
    </li>
  );
};

export default ExpenseItem;
