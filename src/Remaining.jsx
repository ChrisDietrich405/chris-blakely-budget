import React, {useContext} from 'react'
import { ExpenseContext } from './context/ExpenseContext'

const Remaining = () => {
  const { expenses, budget } = useContext(ExpenseContext)

  const remaining = expenses.reduce((total, expense) => {
    return total += expense.cost
  }, 0)
  
  const solution = (budget - remaining)

  return (
    <div className="alert alert-success">
        <span>Remaining: ${solution}</span>
    </div>
  )
}

export default Remaining