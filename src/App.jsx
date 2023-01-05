import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpense from './components/Modals/AddExpense/AddExpense';
import AddExpenseIcon from './components/Modals/components/AddExpenseIcon';

const App = () => {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [expenseList, setExpenseList] = useState(
    localStorage.getItem('expenseList')
      ? JSON.parse(localStorage.getItem('expenseList'))
      : []
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editExpense, setEditExpense] = useState({});

  /** Handle expense modal */
  const handleNewSpending = () => {
    setIsOpenModal(!isOpenModal);
    setEditExpense({});

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setIsOpenModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 300);
    }
  }, [editExpense]);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget) ?? 0);
  }, [budget]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if (budgetLS > 0) {
      setBudget(budgetLS);
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenseList', JSON.stringify(expenseList) ?? []);
  }, [expenseList]);

  useEffect(() => {
    const expenseListLS = JSON.parse(localStorage.getItem('expenseList')) ?? [];

    if (expenseListLS.length > 0) {
      setExpenseList(expenseListLS);
    } else {
      setExpenseList([]);
    }
  }, []);

  return (
    <div className={isOpenModal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenseList={expenseList}
      />

      {/* Button modal */}
      {isValidBudget && (
        <Fragment>
          <main>
            <ExpenseList
              expenseList={expenseList}
              setExpenseList={setExpenseList}
              editExpense={editExpense}
              setEditExpense={setEditExpense}
            />
          </main>
          <span onClick={handleNewSpending}>
            <AddExpenseIcon />
          </span>
        </Fragment>
      )}

      {/* Modal */}
      {isOpenModal && (
        <AddExpense
          handleNewSpending={handleNewSpending}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      )}
    </div>
  );
};

export default App;
