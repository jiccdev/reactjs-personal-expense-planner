import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddExpense from './components/Modals/AddExpense/AddExpense';
import AddExpenseIcon from './components/Modals/components/AddExpenseIcon';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  /** Handle expense modal */
  const handleNewSpending = () => setIsOpenModal(!isOpenModal);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {/* Button modal */}
      {isValidBudget && (
        <span onClick={handleNewSpending}>
          <AddExpenseIcon />
        </span>
      )}

      {/* Modal */}
      {isOpenModal && <AddExpense handleNewSpending={handleNewSpending} />}
    </div>
  );
};

export default App;
