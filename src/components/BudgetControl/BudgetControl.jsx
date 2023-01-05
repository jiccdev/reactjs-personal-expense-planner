import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { parseToDolar } from '../../utils';

const BudgetControl = ({ budget, expenseList }) => {
  const [aviableBudget, setAviableBudget] = useState(0);
  const [spentBudget, setSpentExpense] = useState(0);
  const [percentage, setPercentage] = useState(0);

  /** Calculate spent budget */
  const calculateSpentBudget = (expenseList) => {
    const spentBudget = expenseList.reduce(
      (total, expense) => expense.amount + total,
      0
    );
    setSpentExpense(spentBudget);
  };

  /** Calculate aviable budget */
  const calculateAviableBudget = () => {
    const aviableBudget = budget - spentBudget;
    setAviableBudget(aviableBudget);
  };

  useEffect(() => {
    calculateSpentBudget(expenseList);
    calculateAviableBudget();
  }, [expenseList, spentBudget]);

  useEffect(() => {
    const newPercentage = (((budget - aviableBudget) / budget) * 100).toFixed(
      2
    );
    setPercentage(newPercentage);
  }, [aviableBudget]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressBar value={percentage} />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span> {parseToDolar(budget)}
        </p>

        <p>
          <span>Available:</span> {parseToDolar(aviableBudget)}
        </p>

        <p>
          <span>Spent:</span>
          {parseToDolar(spentBudget)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
