// console.log("utilities loaded");
function getInputFieldValueById(id) {
  //   console.log("will get value by id");
  const InputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(InputValue);
  console.log(id, InputValue, inputNumber);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const TextNumber = parseFloat(textValue);
  return TextNumber;
}

function showSectionById(id) {}
