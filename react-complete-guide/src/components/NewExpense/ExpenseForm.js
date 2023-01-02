import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle]=useState('');
  const [enteredAmount, setEnteredAmount]=useState('');
  const [enteredDate, setEnteredDate]=useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //다른 데이터들이 사라지지 않도록
    //   enteredTitle:event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });    
    };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => { //이벤트 객체를 다시 얻는다.
    event.preventDefault();//내장 자바스크립트 기본요청이 전달되는걸 막을 수 있다.
    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData();
    setEnteredTitle('');  //폼이 전송되고 입력했던 걸 오버라이드해서 깨끗하게 정리
    setEnteredAmount(''); 
    setEnteredDate(''); 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
