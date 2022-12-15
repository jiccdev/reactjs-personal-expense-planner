import React from 'react';
import { icons } from '../../Icon';

const AddExpenseIcon = () => {
  const { BsPlusCircle } = icons;

  return (
    <span className="nuevo-gasto">
      <BsPlusCircle />
    </span>
  );
};

export default AddExpenseIcon;
