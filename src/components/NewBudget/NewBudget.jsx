import React, { useState } from 'react';
import Messaje from '../Message/Messaje';

const NewBudget = ({ budget, setBudget, props }) => {
  const [message, setMessage] = useState('');
  const { isValidBudget, setIsValidBudget } = props;

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    return !budget || budget <= 0
      ? setMessage('Not valid value')
      : setMessage('')
      ? isValidBudget
      : setIsValidBudget(true);
  };

  const handleBudgetField = (ev) => {
    const { value } = ev.target;
    setBudget(Number(value));
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={onFormSubmit} className="formulario">
        <div className="campo">
          <label>Define Budget</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Enter your Budget"
            defaultValue={budget}
            onChange={handleBudgetField}
          />
        </div>
        <div>{message && <Messaje tipo="error">{message}</Messaje>}</div>
        <div className="campo">
          <input type="submit" value="Add budget" />
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
