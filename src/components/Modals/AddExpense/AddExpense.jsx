import React, { useState, useEffect } from 'react';
import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import CloseExpenseIcon from '../components/CloseExpenseIcon';
import { newId } from '../../../utils';

const AddExpense = ({
  handleNewSpending,
  animateModal,
  isOpenModal,
  setIsOpenModal,
  saveExpense,
  setSaveExpense,
}) => {
  const [errorEmptyFieldMsg, setErrorEmptyFieldMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
  });

  /** Reset Form fields */
  const resetFormField = () => {
    setFormData({
      name: '',
      amount: '',
      category: '',
    });
  };

  /** On inputs form change */
  const handleFormChange = (ev) => {
    const { value, name } = ev.target;
    setFormData({
      ...formData,
      [name]: !isNaN(value) ? Number(value) : value,
    });
  };

  /** Save expense in list*/
  const onSaveExpense = (expense) => {
    expense.id = newId();
    setSaveExpense([...saveExpense, expense]);
  };

  /** Validate if inputs are empty */
  const validateFormValues = (formDataObj) => {
    return Object.values(formDataObj).includes('')
      ? setErrorEmptyFieldMsg(`All fields are required!`)
      : setErrorEmptyFieldMsg('');
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    validateFormValues(formData);
    onSaveExpense(formData);
    resetFormField();
  };

  console.log(saveExpense);

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <CloseExpenseIcon
          handleNewSpending={handleNewSpending}
          resetFormField={resetFormField}
        />
      </div>

      {/* Expense Form */}
      <ExpenseForm
        animateModal={animateModal}
        formData={formData}
        setFormData={setFormData}
        onFormSubmit={onFormSubmit}
        handleFormChange={handleFormChange}
        errorEmptyFieldMsg={errorEmptyFieldMsg}
      />
    </div>
  );
};

export default AddExpense;
