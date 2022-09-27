import ExpenseDate from '../ExpenseDate/ExpenseDate';
import { motion } from "framer-motion";

function ExpenseItem({ Items }) {
  const effects = {
    hidden: { opacity: 0,y: "-300px"},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };



  return (
    <>
      {Items.map((d) => (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="item"
        key = {d.id}>
          <ExpenseDate date = {d.date}/>
          <motion.div
           variants={effects} 
          initial="hidden" 
          animate="show"
          className="description">
            <h2>{d.name}</h2>
            <div className="price">{d.price}</div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}

export default ExpenseItem;
