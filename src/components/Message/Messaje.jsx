import React from 'react';

const Messaje = ({ children, tipo }) => {
  return <div className={`alerta ${tipo}`}>{children}</div>;
};

export default Messaje;
