import React from 'react'
import {motion} from "framer-motion"
const ExpenseDate = ({date}) => {

    const animate = {
        hidden: { opacity: 0,x: "-300px"},
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.5,
          },
        },
      };
  return (
    <motion.div 
    variants = {animate}
    initial = "hidden"
    animate="show"

    className="expensedate">
    <div className="month">{date.toLocaleString('en-us',{month: 'long'})}</div>
    <div className = "date">{date.toLocaleString('en-us',{day: '2-digit'})}</div>
    <div className = "year">{date.getFullYear()}</div>
    </motion.div>
  )
}

export default ExpenseDate