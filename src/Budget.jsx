import React, { useContext, useState } from "react";
import { ExpenseContext } from "./context/ExpenseContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false)

  const handleSaveClick = (value) => {
    dispatch({type: "SET_BUDGET", payload: value})
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  return (
    <div className="alert alert-secondary">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget}/>
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
      )}
      <span>Budget: ${budget}</span>
      <button onClick={() => setIsEditing(!isEditing)} className="btn btn-primary">edit</button>
    </div>
  );
};

export default Budget;
