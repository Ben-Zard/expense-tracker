import Chart from '../Chart/Chart';

const ExpenseFilerList = ({expenses}) => {

const chartPoints = [
  {label: 'Jan',value:0},
  {label: 'Feb',value:0},
  {label: 'Mar',value:0},
  {label: 'Apr',value:0},
  {label: 'May',value:0},
  {label: 'Jun',value:0},
  {label: 'Jul',value:0},
  {label: 'Aug',value:0},
  {label: 'Sep',value:0},
  {label: 'Oct',value:0},
  {label: 'Nov',value:0},
  {label: 'Dec',value:0},
]
for (const expense of expenses) {
  const expenseMonth = expense.date.getMonth();
  chartPoints[expenseMonth].value += expense.amount;
}
  return (
<>
<div className="expensecontainer"> 
       <Chart datapoint = {chartPoints}/>
       </div>
</>
  )
}

export default ExpenseFilerList