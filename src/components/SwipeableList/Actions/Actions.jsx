import {
  LeadingActions,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { icons } from '../../Icon';

const { FiTrash, MdModeEditOutline } = icons;

const deleteItem = () => {};

const editItem = () => {};

export const editExpenseItem = () => (
  <TrailingActions>
    <SwipeAction onClick={() => console.info('Edit item')}>
      <MdModeEditOutline />
    </SwipeAction>
  </TrailingActions>
);

export const deleteExpenseItem = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info('Eliminar item')}>
      <FiTrash />
    </SwipeAction>
  </LeadingActions>
);
