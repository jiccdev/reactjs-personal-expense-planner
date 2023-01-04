import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({
  expenseList,
  setExpenseList,
  editExpense,
  setEditExpense,
}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>Expenses</h2>
      <ul>
        {expenseList.length > 0 ? (
          expenseList.map((expense, index) => (
            <ExpenseItem
              key={expense?.id}
              expense={expense}
              expenseList={expenseList}
              setExpenseList={setExpenseList}
              editExpense={editExpense}
              setEditExpense={setEditExpense}
            />
          ))
        ) : (
          <p>No expenses yet</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
