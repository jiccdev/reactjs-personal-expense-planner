import { useState } from 'react';

export const useExpenseList = (initialState) => {
  const [expenseList, setExpenseList] = useState(initialState);

  const addExpense = (expense) => {
    setExpenseList([...expenseList, expense]);
  };

  const removeExpense = (id) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
  };

  const editExpense = (id, expense) => {
    setExpenseList(
      expenseList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...expense,
          };
        }
        return item;
      })
    );
  };

  return [expenseList, addExpense, removeExpense, editExpense];
};
