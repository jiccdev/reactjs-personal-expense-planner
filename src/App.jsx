import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpense from './components/Modals/AddExpense/AddExpense';
import AddExpenseIcon from './components/Modals/components/AddExpenseIcon';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseList, setExpenseList] = useState([]);

  /** Handle expense modal */
  const handleNewSpending = () => {
    setIsOpenModal(!isOpenModal);

    setTimeout(() => {
      setAnimateModal(true);
    }, 300);
  };

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
            <ExpenseList expenseList={expenseList} />
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
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
        />
      )}
    </div>
  );
};

export default App;
