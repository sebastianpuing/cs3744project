"use client";

import Header from "./components/header";
import MyInput from "./components/input";
import { useState } from 'react';
import Display from "./components/display";



export default function Home() {

  const [amountText, setAmountText] = useState("");
  const [total, setTotal] = useState(0);

  function addAmount() {
    if (validateAmount(amountText)) {
      setTotal((prev) => prev + Number(amountText));
      return true;
    }
    return false;
  }

  function validateAmount(amount) {
    const num = Number(amount);
    return !isNaN(num) && num > 0 && num <= 128;
  }

  function handleChangeAmount(e){
    setAmountText(e.target.value);
  }

  function handleClick() {
    if (addAmount()) {
      setAmountText(""); 
    } 
    else {
      setAmountText(""); 
    }
  }


  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header 
        text="Water Tracker"
      />
      <Display 
        value={total}
      />
      <MyInput 
        placeholder="Enter water amount in oz" 
        amount={amountText}
        onChangeAmount={handleChangeAmount}
        onClick={handleClick}
      />
    </div>
  );
}
