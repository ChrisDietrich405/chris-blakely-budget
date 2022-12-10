import React, {useContext} from 'react'
import { ExpenseContext } from './context/ExpenseContext'

const Budget = () => {
  const {budget } = useContext(ExpenseContext)
  return (
    <div className="alert alert-secondary">
        <span>Budget: ${budget}</span>
    </div>
  )
}

export default Budget