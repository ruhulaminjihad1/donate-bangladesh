// // for donate  1
const addDonate1 = document.getElementById("btn-donate-now1");
addDonate1.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("donate 1 loaded");

  //   getInputFieldValueById();
  const addDonate1 = getInputFieldValueById("input-add-donate1");
  //   const addDonate2 = getInputFieldValueById("input-add-donate2");
  console.log("add money with parameter", addDonate1);
  if (addDonate1 > 0) {
    const balance1 = getTextFieldValueById("donate-balance1");
    console.log(balance1);

    const updateBalance = balance1 + addDonate1;
    console.log(updateBalance);
    document.getElementById("donate-balance1").innerText = updateBalance;

    const mainBalance = getTextFieldValueById("main-balance");
    const remainingBalance = mainBalance - updateBalance;
    console.log(remainingBalance);
    document.getElementById("main-balance").innerText = remainingBalance;
  } else {
    alert("please add valid balance");
  }
});

// // for donate 2 Feni--------------

const addDonate2 = document.getElementById("btn-donate-now2");
addDonate2.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("donate 2 loaded");

  //   getInputFieldValueById();
  const addDonate2 = getInputFieldValueById("input-add-donate2");
  //   const addDonate2 = getInputFieldValueById("input-add-donate2");
  console.log("add money with parameter", addDonate2);
  if (addDonate2 > 0) {
    const balance2 = getTextFieldValueById("donate-balance2");
    console.log(balance2);
    const updateBalance2 = balance2 + addDonate2;
    console.log(updateBalance2);
    document.getElementById("donate-balance2").innerText = updateBalance2;

    const mainBalance = getTextFieldValueById("main-balance");
    const remainingBalance = mainBalance - updateBalance2;
    console.log(remainingBalance);
    document.getElementById("main-balance").innerText = remainingBalance;
  } else {
    alert("please add valid balance");
  }
});

// for quota movement donation ---------------
const addDonate3 = document.getElementById("btn-donate-now3");
addDonate3.addEventListener("click", function (event) {
  event.preventDefault();

  const addDonate3 = getInputFieldValueById("input-add-donate3");
  console.log(addDonate3);

  if (addDonate3 > 0) {
    const balance3 = getTextFieldValueById("donate-balance3");
    console.log(balance3);
    const updateBalance3 = balance3 + addDonate3;
    document.getElementById("donate-balance3").innerText = updateBalance3;
    const mainBalance = getTextFieldValueById("main-balance");
    const remainingBalance = mainBalance - updateBalance3;
    console.log(remainingBalance);
    document.getElementById("main-balance").innerText = remainingBalance;
  } else {
    alert("please add valid amount");
  }
});
