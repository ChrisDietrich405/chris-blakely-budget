import React from 'react'

const ViewBudget = ({handleEditClick, budget}) => {
  return (
    <div>
        <span>${budget}</span>
        <button type="button" className="btn btn-primary" onClick={handleEditClick}>edit</button>
    </div>
  )
}

export default ViewBudget