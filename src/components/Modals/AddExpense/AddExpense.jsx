import React from 'react';
import CloseExpenseIcon from '../components/CloseExpenseIcon';

const AddExpense = ({ handleNewSpending }) => {
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <CloseExpenseIcon handleNewSpending={handleNewSpending} />
      </div>
    </div>
  );
};

export default AddExpense;
