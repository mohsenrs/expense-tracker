import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [],
}

// create context
export const GlobalContext = createContext(initialState)

// provider
export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
