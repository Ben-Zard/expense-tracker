import React from 'react'
import ExpenseList from '../../componets/ExpenseList/ExpenseList'
import ExpenseAll from '../../componets/ExpenseList/ExpenseAllList'

const Home = () => {

  return (
    <>
    {/* // <div className = "head">  */}
    <ExpenseList/>
 <ExpenseAll/>
    </>
  )
}

export default Home