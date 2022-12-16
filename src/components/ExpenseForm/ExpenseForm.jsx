import React from 'react';
import Messaje from '../Message/Messaje';

const ExpenseForm = ({
  animateModal,
  formData,
  onFormSubmit,
  handleFormChange,
  errorEmptyFieldMsg,
}) => {
  return (
    <form
      onSubmit={onFormSubmit}
      className={`formulario ${animateModal ? 'animar' : ''}`}
    >
      {errorEmptyFieldMsg && (
        <Messaje tipo="error">{errorEmptyFieldMsg}</Messaje>
      )}

      <legend>New Expense</legend>
      <div className="campo">
        <label htmlFor="name">Expense name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Add expense name"
        />
      </div>

      <div className="campo">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleFormChange}
          placeholder="Add ammount expense: ex. 200"
        />
      </div>

      <div className="campo">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          <option value="">Select an option</option>
          <option value="savings">Savings</option>
          <option value="food">Food</option>
          <option value="home">Home</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
        </select>
      </div>

      <input type="submit" value="Add expense" />
    </form>
  );
};

export default ExpenseForm;
