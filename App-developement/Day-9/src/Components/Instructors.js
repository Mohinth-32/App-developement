import React, { useState } from 'react';
import ExpenseList from './ExpenseList'; 

function Instructors({ expenses }) {
  // src/App.js

  return (
    <div>
      
      <p>Expense List:</p>
      <ExpenseList expenses={expenses} />
    </div>
  );

}

export default Instructors
