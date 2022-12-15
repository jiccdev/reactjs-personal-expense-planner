import React from 'react';
import { icons } from '../../Icon';

const CloseExpenseIcon = ({ handleNewSpending }) => {
  const { GrClose } = icons;
  return (
    <span onClick={handleNewSpending}>
      <GrClose />
    </span>
  );
};

export default CloseExpenseIcon;
