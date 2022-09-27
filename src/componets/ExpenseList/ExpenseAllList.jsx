
import ExpenseItem from './ExpenseItems/ExpenseItem'
import { Items } from "../../base/Items";

const ExpenseFilerList = () => {

  return (
<>
<div className="expensecontainer"> 
       <ExpenseItem Items = {Items}/>
       </div>
</>
  )
}

export default ExpenseFilerList