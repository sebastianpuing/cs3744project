"use client";

import Header from "./components/Header";
import MyInput from "./components/Input";
import { useState } from 'react';
import Display from "./components/Display";
import ProgressBar from "./components/ProgressBar";



export default function Home() {

// MVC: model starts

  const [amountText, setAmountText] = useState("");
  const [goalText, setGoalText] = useState("");
  const [total, setTotal] = useState(0);
  const [goal, setGoal] = useState(100);

  const data = [
  { name: "Water Intake", value: total },
  ];

// MVC: model ends

// MVC: controller starts

  function validateAmount() {
    const num = Number(amountText);
    return !isNaN(num) && num > 0 && num <= 128;
  }

  function validateGoal() {
    const num = Number(goalText);
    return !isNaN(num) && num > 0 && num <= 250;
  }

  function handleChangeAmount(e){
    setAmountText(e.target.value);
  }

  function handleChangeGoal(e){
    setGoalText(e.target.value);
  }

  function handleAmountClick() {
    if (validateAmount()) {
      let num = Number(amountText);
      setTotal(t => t + num);
      setAmountText(""); 
    } 
    else {
      setAmountText(""); 
    }
  }

  function handleGoalClick() {
    const num = Number(goalText);
    if (validateGoal()) {
      setGoal(num);
      setGoalText("");
    } 
    else {
      setGoalText("");
    }
  }

// MVC: controller ends

// MVC: view starts

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header 
        text="Water Tracker"
      />
      <ProgressBar 
        data={data}
        goal={goal}
      />
      <Display 
        goal={goal}
        value={total}
      />
      <MyInput 
        amount={amountText}
        goal={goalText}
        onChangeAmount={handleChangeAmount}
        onChangeGoal={handleChangeGoal}
        onAmountClick={handleAmountClick}
        onGoalClick={handleGoalClick}
      />
    </div>
  );
  // MVC: view ends
}
