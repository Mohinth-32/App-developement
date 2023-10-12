// BudgetForm.js
import React, { useState } from 'react';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px', // Adjust as needed
  margin: '0 auto', // Center the form
};

const inputStyle = {
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function BudgetForm({ onBudgetSet }) {
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBudgetSet(parseFloat(budget));
    setBudget('');
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input
        style={inputStyle}
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <button style={buttonStyle} type="submit">
        Set Budget
      </button>
    </form>
  );
}

export default BudgetForm;
