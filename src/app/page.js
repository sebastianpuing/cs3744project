"use client";

import Header from "./components/Header";
import MyInput from "./components/Input";
import { useState, useEffect } from 'react';
import Display from "./components/Display";
import ProgressBar from "./components/ProgressBar";
import axios from "axios";

/**
 * The Home component is the main componet of the applicationd.
 * It follows the MVC design pattern. The model contains all the state 
 * varaibles and helper functions. The coontroller contains all of 
 * the event handles and useEffect. The view contains of of the components
 * for the application. 
 * @returns the application
 */
export default function Home() {
// MVC: model starts

  //stores the input amount 
  const [amountText, setAmountText] = useState("");
  //stores the input goal
  const [goalText, setGoalText] = useState("");
  //stores the total intake
  const [total, setTotal] = useState(0);
  //stores the goal
  const [goal, setGoal] = useState(100);
  //stores the current date
  const [date, setDate] = useState(getDate());

  //stores the data for the progress bar
  const data = [
  { name: "Water Intake", value: total },
  ];

  //validates the inputted amount from the user
  function validateAmount() {
    const num = Number(amountText);
    return !isNaN(num) && num > 0 && num <= 128;
  }

  //validates the inputted goal from the user
  function validateGoal() {
    const num = Number(goalText);
    return !isNaN(num) && num > 0 && num <= 250;
  }

  //gets the current date in YYYY-MM-DD format
  function getDate(){
    let today = new Date().toISOString().slice(0, 10)
    return today;
  }
// MVC: model ends

// MVC: controller starts

  //handles the amount input change
  function handleChangeAmount(e){
    setAmountText(e.target.value);
  }

  //handles the goal input change
  function handleChangeGoal(e){
    setGoalText(e.target.value);
  }

  //handles the additon of intake and calls post method
  async function handleAmountClick() {
    if (!validateAmount()) {
      setAmountText(""); 
      return;
    }
    
    const num = Number(amountText);
    setTotal(t => t + num);
    setAmountText("");

    try {
      await axios.post("/api/posts", {intake: num, date});
    } 
    catch (err) {
      console.log(err);
    }
  }

  //handles the setting of the goal and calls post method
  async function handleGoalClick() {
    if (!validateGoal()) {
      setGoalText("");
      return;
    }

    const num = Number(goalText);
    setGoal(num);
    setGoalText("");

    try {
      await axios.post("/api/posts", {goal: num, date});
    } 
    catch (err) {
      console.log(err);
    }
  }

  //constantly updates the date every second
  useEffect(() => {
    const interval = setInterval(() => {
      let today = getDate();
      setDate(today);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
// MVC: controller ends

// MVC: view starts
  return (
    <div className="items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <Header 
        text="Water Tracker"
        date={date}
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
