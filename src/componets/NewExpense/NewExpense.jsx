import React from 'react'
// import { Items } from "../../base/Items"
import ExpenseForm from './ExpenseForm/ExpenseForm'
import { useState } from 'react'

const NewExpense = ({onaddExpense}) => {

const onSaveDataHandler = (enteredData) => {
const expenseData ={ ...enteredData, 
  id: Math.round(Math.random() * 100)};
  onaddExpense(expenseData)
  setexpense(true);
}
const [addexpense, setexpense] = useState(true);

const addEditHandler = () => {
  setexpense(!true);
  console.log(addexpense)
};

const stopEditHandler = () => {
  setexpense(true);
  console.log(addexpense)
};
  return (
    <>
    <div className = "new">
    {addexpense ? (
        <button className = "button" onClick={() => addEditHandler(false)}> Add New Expense</button>
      ) : (
        <ExpenseForm onCancel = {stopEditHandler} onSaveData = {onSaveDataHandler}/>
        )}
        </div>
        </>
  )
}

export default NewExpense