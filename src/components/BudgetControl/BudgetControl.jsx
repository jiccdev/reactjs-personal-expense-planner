import React from 'react';
import { parseToDolar } from '../../utils/';

const BudgetControl = ({ budget }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Graphic</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Budget:</span> {parseToDolar(budget)}
        </p>

        <p>
          <span>Available:</span> {parseToDolar(budget)}
        </p>

        <p>
          <span>Spent:</span> {parseToDolar(budget)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
