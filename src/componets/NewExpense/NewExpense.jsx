import React from 'react'
// import { Items } from "../../base/Items"
import ExpenseForm from './ExpenseForm/ExpenseForm'

const NewExpense = ({onaddExpense}) => {

const onSaveDataHandler = (enteredData) => {
const expenseData ={ ...enteredData, 
  id: Math.round(Math.random() * 100)};
  onaddExpense(expenseData)

}

  return (
    <div className = "new">
        <ExpenseForm onSaveData = {onSaveDataHandler}/>
        </div>
  )
}

export default NewExpense