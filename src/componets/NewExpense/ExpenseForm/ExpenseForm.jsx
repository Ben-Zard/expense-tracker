import React, { useState } from "react";

const ExpenseForm = ({ onSaveData,onCancel }) => {
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  //  const [userInput,setUserInput]=useState({
  //     name:'',
  //     date:'',
  //     price:''
  // })

  const nameChangeHandler = (e) => {
    setname(e.target.value);

    // setUserInput({
    // ...userInput,name: e.target.value})

    // setUserInput((prev)=>{
    //     return {...prev, name: e.target.value}});
  };
  const dateChangeHandler = (e) => {
    //   setUserInput((prev)=>{
    //         return {...prev, date: e.target.value}});

    setDate(e.target.value);
  };
  const priceChangeHandler = (e) => {
    // setUserInput((prev)=>{
    //     return {...prev, price: e.target.value}});

    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //stops from reloading page
    const expenseData = {
      name: name,
      price: +price,
      date: new Date(date),
    };
    onSaveData(expenseData);
    setname("");
    setPrice("");
    setDate("");
  };

  return (
    <>
        <form onSubmit={submitHandler}>
          <div className="newcont">

            <div className="newcontrol">
              <label>name</label>
              <input type="text" value={name} onChange={nameChangeHandler} />
            </div>
            <div className="newcontrol">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={price}
                onChange={priceChangeHandler}
              />
            </div>
            <div className="newcontrol">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2023-12-12"
                value={date}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="newactions">
            <input type="reset" value="Cancel" className="button" onClick ={onCancel} />
            <input type="submit" className="button" value="Add Expense" />
          </div>
        </form>
    </>
  );
};

export default ExpenseForm;
