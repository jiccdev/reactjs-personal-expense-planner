import React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { parseToDolar, parseDate } from '../../utils';

import IconAhorro from '../../img/icons/icono_ahorro.svg';
import IconHome from '../../img/icons/icono_casa.svg';
import IconFood from '../../img/icons/icono_comida.svg';
import IconHealth from '../../img/icons/icono_salud.svg';
import IconSubscriptions from '../../img/icons/icono_suscripciones.svg';
import { icons } from '../Icon';

const ExpenseItem = ({
  expense,
  expenseList,
  setExpenseList,
  editExpense,
  setEditExpense,
}) => {
  const { id, name, amount, category, date } = expense;
  const { FiTrash, MdModeEditOutline } = icons;

  const iconDictionary = {
    savings: IconAhorro,
    food: IconFood,
    home: IconHome,
    health: IconHealth,
    subscriptions: IconSubscriptions,
  };

  const leadingActions = () => {
    const editExpense = (id, expense) => {
      setEditExpense({ ...editExpense, ...expense });
    };
    return (
      <LeadingActions>
        <SwipeAction onClick={() => editExpense(id, expense)}>
          <MdModeEditOutline />
        </SwipeAction>
      </LeadingActions>
    );
  };

  const trailingActions = (id) => {
    const deleteExpense = (id) => {
      const newExpenseList = expenseList.filter((expense) => expense.id !== id);
      setExpenseList(newExpenseList);
    };

    return (
      <TrailingActions>
        <SwipeAction onClick={() => deleteExpense(id)}>
          <FiTrash />
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions(id)}
      >
        <li className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconDictionary[category]} alt={`icon-${category}`} />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="monto">
                Created at: <span>{parseDate(date)}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="cantidad-gasto">{parseToDolar(amount)}</p>
          </div>
        </li>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default ExpenseItem;
