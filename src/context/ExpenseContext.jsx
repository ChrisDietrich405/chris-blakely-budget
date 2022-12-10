import { createContext, useReducer } from "react";


const budgetReducer = (state, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state
    }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "shopping", cost: 22 },
    { id: 2, name: "clothes", cost: 322 },
    { id: 3, name: "gasoline", cost: 322 },
    { id: 4, name: "maintenance", cost: 232 },
  ],
};

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <ExpenseContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
