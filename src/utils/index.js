/** Parse a number to dolar value */
export const parseToDolar = (numberValue) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numberValue);

/** Generate unique id */
export const newId = () => Math.floor(Math.random() * 1000000);
