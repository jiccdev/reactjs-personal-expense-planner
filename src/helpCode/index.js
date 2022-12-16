// Recorrer los valores de un objeto FORMA 1
const validateFormValues = (formDataObj) => {
  console.log(Object.values(formDataObj));

  for (let key in formDataObj) {
    if (!formDataObj[key]) {
      return setErrorEmptyFieldMsg(`All fields are required!`);
    }
  }
  return setIsOpenModal(!isOpenModal) && setErrorEmptyFieldMsg('');
};

// Recorrer los valores de un objeto FORMA 12
function validateProperties(obj) {
  let values = Object.values(obj);
  for (let value of values) {
    if (value === undefined) {
      return false;
    }
  }
  return true;
}
