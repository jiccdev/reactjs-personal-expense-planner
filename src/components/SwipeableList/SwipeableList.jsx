import React from 'react';
import { SwipeableList, SwipeableListItem } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const SwipeableList = ({ children }) => {
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        {children}
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default SwipeableList;
