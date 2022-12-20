import React from 'react';
import { parseToDolar, parseDate } from '../../utils';

import IconAhorro from '../../img/icons/icono_ahorro.svg';
import IconHome from '../../img/icons/icono_casa.svg';
import IconFood from '../../img/icons/icono_comida.svg';
import IconHealth from '../../img/icons/icono_salud.svg';
import IconSubscriptions from '../../img/icons/icono_suscripciones.svg';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

const ExpenseItem = ({ expense, expenseList, setExpenseList }) => {
  const { id, name, amount, category, date } = expense;

  const iconDictionary = {
    savings: IconAhorro,
    food: IconFood,
    home: IconHome,
    health: IconHealth,
    subscriptions: IconSubscriptions,
  };

  const leadingActions = () => {
    console.log('edit');
  };

  const trailingActions = () => {
    console.log('delete');
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions}
        trailingActions={trailingActions}
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
