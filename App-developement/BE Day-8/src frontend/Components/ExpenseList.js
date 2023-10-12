import React from 'react';

function ExpenseList({ expenses }) {
    if (!Array.isArray(expenses) || expenses.length === 0) {
        return <p>No expenses to display.</p>;
      }
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          <strong>{expense.description}</strong>: ${expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
