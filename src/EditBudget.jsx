import React, { useState } from "react";

const EditBudget = ({ budget, handleSaveClick }) => {
  const [value, setValue] = useState(budget);

  return <div>
    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form-control mr-3"/>
    <button onClick={() => handleSaveClick(value)}>Confirm</button>
  </div>;
};

export default EditBudget;
