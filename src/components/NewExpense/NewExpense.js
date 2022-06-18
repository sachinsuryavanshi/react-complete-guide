import React from "react";
import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveDataExpense = (expeseData) => {
    const expenseData = {
      ...expeseData,
      id: Math.random.toString,
    };
    // console.log(expenseData);
    props.onSaveData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveDataExpense={saveDataExpense} />
    </div>
  );
};

export default NewExpense;
