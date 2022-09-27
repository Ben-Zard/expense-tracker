import {useState} from "react";
import ExpenseItem from "./ExpenseItems/ExpenseItem";
import { Items } from "../../base/Items";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const ExpenseList = () => {
  const [expenses,setExpense] = useState(Items); 

  const addExpenseHandler = (expense) => {
    setExpense((prevexpense)=> { 
      return [expense, ...prevexpense]});
  }

  const [year,setYear] = useState('2022');
  const yearFilterChangeHandler = (year) =>{
    setYear(year); 
  }
  const filterExpense = expenses.filter((expense) =>{
return expense.date.getFullYear().toString() === year;
  });


  return (
    <div className="expensecontainer">
      <ExpenseFilter  selectyear={year} onChangeYear = {yearFilterChangeHandler}/>
      {filterExpense.length  === 0 ? 
      (<h1> nothing for this year </h1>
      ) : ( <> 
      <ExpenseItem  key = {filterExpense.id} Items={filterExpense} />
      </>
      )}
      <NewExpense onaddExpense={addExpenseHandler}/> 
    </div>
  );
};

export default ExpenseList;
