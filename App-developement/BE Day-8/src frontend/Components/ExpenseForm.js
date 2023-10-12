import React, { useState, useEffect } from 'react';


function ExpenseForm({ onExpenseAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onExpenseAdd({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
    
    </>
  );
}

export default ExpenseForm;
