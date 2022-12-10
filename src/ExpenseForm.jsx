import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ExpenseContext } from "./context/ExpenseContext";

const ExpenseForm = () => {
  const [inputName, setInputName] = useState("");
  const [inputCost, setInputCost] = useState("");
  const { dispatch, expenses } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: uuidv4,
      name: inputName,
      cost: parseInt(inputCost),
    };
    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault()
  //     const newItem = { id: uuidv4(), name: inputName, cost: parseInt(inputCost)}
  //     dispatch({type: "ADD_EXPENSE", payload: newItem})
  // }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            type="text"
            id="name"
            className="form-control"
          />
        </div>

        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            value={inputCost}
            onChange={(e) => setInputCost(e.target.value)}
            type="text"
            id="cost"
            className="form-control"
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
