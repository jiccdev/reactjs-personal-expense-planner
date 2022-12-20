import React from 'react';
import NewBudget from '../NewBudget/NewBudget';
import BudgetControl from '../BudgetControl/BudgetControl';

const Header = ({ budget, setBudget, ...props }) => {
  const { isValidBudget, expenseList } = props;

  return (
    <header>
      <h1>Expense Planner</h1>

      {isValidBudget ? (
        <BudgetControl budget={budget} expenseList={expenseList} />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} props={props} />
      )}
    </header>
  );
};

export default Header;
