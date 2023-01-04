import React, { useState, useEffect } from 'react';
import ExpenseForm from '../../ExpenseForm/ExpenseForm';
import CloseExpenseIcon from '../components/CloseExpenseIcon';
import { newId } from '../../../utils';
import { useExpenseList } from '../../../hooks/useExpenseList';

const AddExpense = ({
  handleNewSpending,
  animateModal,
  setAnimateModal,
  setIsOpenModal,
  expenseList,
  setExpenseList,
  setEditExpense,
  editExpense,
}) => {
  const [errorEmptyFieldMsg, setErrorEmptyFieldMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
  });
  const [id, setId] = useState('');
  const [date, setDate] = useState('');

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
  const onExpenseListChange = (expense) => {
    if (Object.keys(editExpense).length > 0) {
      const newExpenseList = expenseList.map((item) =>
        item?.id === editExpense?.id
          ? { ...expense, id: editExpense?.id }
          : item
      );

      setExpenseList(newExpenseList);
      setEditExpense({});
      setIsOpenModal(false);
      setAnimateModal(false);
    } else {
      const newExpense = { ...expense, id: newId(), date: new Date() };
      setExpenseList([...expenseList, newExpense]);
      setIsOpenModal(false);
      setAnimateModal(false);
    }
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
    onExpenseListChange(formData);
    resetFormField();
  };

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setId(editExpense.id);
      setFormData({ ...editExpense, id });
      setDate(editExpense?.date);
    }
  }, [editExpense]);

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
        editExpense={editExpense}
      />
    </div>
  );
};

export default AddExpense;
