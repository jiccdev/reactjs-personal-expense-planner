import React from 'react';
import { icons } from '../../Icon';

const CloseExpenseIcon = ({ handleNewSpending, resetFormField }) => {
  const { GrClose } = icons;
  return (
    <span
      onClick={() => {
        handleNewSpending();
        resetFormField();
      }}
    >
      <GrClose />
    </span>
  );
};

export default CloseExpenseIcon;
