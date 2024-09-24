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

    // donation history
    const historyItem = document.createElement("div");
    // historyItem.className.add()"bg-white p-3 rounded-md";

    const dateParagraph = document.createElement("p");
    dateParagraph.textContent = new Date().toLocaleDateString();

    const donationParagraph = document.createElement("p");
    donationParagraph.textContent = `You donated: ${updateBalance} is donated`;
    historyItem.appendChild(dateParagraph);
    historyItem.appendChild(donationParagraph);
    console.log(historyItem);
    const historyContainer = document.getElementById("history-list");
    historyContainer.appendChild(historyItem);
    showModal();
  } else {
    alert("please add valid balance");
  }
});

// // for donate 2 Feni--------------

const addDonate2 = document.getElementById("btn-donate-now2");
addDonate2.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("donate 2 loaded");

  const addDonate2 = getInputFieldValueById("input-add-donate2");

  console.log("add money with parameter", addDonate2);
  if (addDonate2 > 0) {
    const balance2 = getTextFieldValueById("donate-balance2");
    console.log(balance2);
    const mainBalance = getTextFieldValueById("main-balance");
    if (addDonate2 > mainBalance) {
      alert("Insufficient balance!");
    } else {
      const updateBalance2 = balance2 + addDonate2;
      console.log(updateBalance2);
      document.getElementById("donate-balance2").innerText = updateBalance2;

      const remainingBalance = mainBalance - updateBalance2;
      console.log(remainingBalance);
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation history
      const historyItem2 = document.createElement("div");
      // historyItem2.classList.add("bg-white p-3 rounded-md");

      const dateParagraph2 = document.createElement("p");
      dateParagraph2.textContent = new Date().toLocaleDateString();

      const donationParagraph2 = document.createElement("p");
      donationParagraph2.textContent = `You donated: ${updateBalance2} is donated`;
      historyItem2.appendChild(dateParagraph2);
      historyItem2.appendChild(donationParagraph2);
      console.log(historyItem2);
      const historyContainer2 = document.getElementById("history-list");
      historyContainer2.appendChild(historyItem2);
      showModal();
    }
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
    const mainBalance = getTextFieldValueById("main-balance");
    if (addDonate3 > mainBalance) {
      alert("Insufficient balance!");
    } else {
      const updateBalance3 = balance3 + addDonate3;
      document.getElementById("donate-balance3").innerText = updateBalance3;

      const remainingBalance = mainBalance - addDonate3;
      console.log(remainingBalance);
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation history
      const historyItem3 = document.createElement("div");
      // historyItem2.classList.add("bg-white p-3 rounded-md");

      const dateParagraph3 = document.createElement("p");
      dateParagraph3.textContent = new Date().toLocaleDateString();

      const donationParagraph3 = document.createElement("p");
      donationParagraph3.textContent = `You donated: ${updateBalance3} is donated`;
      historyItem3.appendChild(dateParagraph3);
      historyItem3.appendChild(donationParagraph3);
      console.log(historyItem3);
      const historyContainer3 = document.getElementById("history-list");
      historyContainer3.appendChild(historyItem3);

      showModal();
    }
  } else {
    alert("Please add a valid input in this regards");
  }
});

function showModal() {
  const modalToggle = document.getElementById("my_modal_6");

  // Show the modal
  modalToggle.checked = true; // This will open the modal

  // Close modal on click
  document.getElementById("modal-close").addEventListener("click", function () {
    modalToggle.checked = false; // This will close the modal
  });
}
// toggle function
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-baseColor");

  donationTab.classList.remove("bg-baseColor");

  document.getElementById("donation-form").classList.add("hidden");
});

// assistant tab
