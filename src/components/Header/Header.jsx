import React from 'react';
import NewBudget from '../NewBudget/NewBudget';

const Header = ({ budget, setBudget, ...props }) => {
  const { isValidBudget } = props;

  console.log(isValidBudget);

  return (
    <header>
      <h1>Expense Planner</h1>

      {isValidBudget ? (
        <p>Nueva ventana</p>
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} props={props} />
      )}
    </header>
  );
};

export default Header;
