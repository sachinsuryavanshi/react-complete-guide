import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataExpense = (expeseData) => {
    const expenseData = {
      ...expeseData,
      id: Math.random.toString(),
    };
    // console.log(expenseData);
    props.onSaveData(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveDataExpense={saveDataExpense}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
