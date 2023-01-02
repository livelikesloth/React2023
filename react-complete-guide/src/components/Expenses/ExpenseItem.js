import React from'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem=(props)=> {

    /**
     * 이 함수를 호출하는 것은 어떤 변수에 새로운 값을 할당하는 것이 아니라 이 특별한 변수로 시작한다.
     * 이 특별한 변수는 새로운 값만 받는 것이 아니라 state를 업데이트 하는 함수를 호출하게 되고 
     * useState로 상태를 초기화 했던 곳에서 다시 실행될 것이다.
     * state가 변할 때 이 컴포넌트 함수를 다시 호출하고 싶으면 이 state를 업데이트하는 함수를 호출하면된다.
     */ 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
