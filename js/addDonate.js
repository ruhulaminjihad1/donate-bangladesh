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
    const mainBalance = getTextFieldValueById("main-balance");
    if (addDonate1 > mainBalance) {
      alert("Insufficient balance!");
    } else {
      const updateBalance = balance1 + addDonate1;
      console.log(updateBalance);
      document.getElementById("donate-balance1").innerText = updateBalance;

      const remainingBalance = mainBalance - updateBalance;
      console.log(remainingBalance);
      document.getElementById("main-balance").innerText = remainingBalance;

      // donation history
      const donationTitle = document.getElementById("title1").textContent;
      const historyItem = document.createElement("div");
      historyItem.classList.add(
        "bg-white",
        "p-3",
        "rounded-md",
        "border-2",

        "m-3",

        "items-center"
      );

      // donation title
      const titleParagraph = document.createElement("p");
      titleParagraph.textContent = `${donationTitle}`;
      titleParagraph.classList.add("text-xl", "font-bold");
      const donationParagraph = document.createElement("p");
      donationParagraph.textContent = `Taka: ${updateBalance} `;

      donationParagraph.classList.add("text-xl", "font-bold", "text-green-500");
      const dateParagraph = document.createElement("p");
      dateParagraph.textContent = getFormattedDate();

      historyItem.appendChild(donationParagraph);
      historyItem.appendChild(titleParagraph);
      historyItem.appendChild(dateParagraph);
      console.log(historyItem);
      function getFormattedDate() {
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        };
        const now = new Date();
        const formattedDate = now.toLocaleString("en-US", options); // e.g. "Sep 25, 2024, 14:00"
        return `Date: ${formattedDate} GMT+6h  (Bangladesh Standard Time)`;
      }
      const historyContainer = document.getElementById("history-list");
      historyContainer.appendChild(historyItem);
      historyContainer.classList.add("border-2", "rounded-lg", "m-2");
      showModal();
    }
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
      const donationTitle2 = document.getElementById("title2").textContent;
      const historyItem2 = document.createElement("div");
      historyItem2.classList.add(
        "bg-white",
        "p-3",
        "border-2",
        "rounded-md",
        "m-3",

        "items-center"
      );

      // donation title
      const titleParagraph2 = document.createElement("p");
      titleParagraph2.textContent = `${donationTitle2}`;
      titleParagraph2.classList.add("text-xl", "font-bold");
      const donationParagraph2 = document.createElement("p");
      donationParagraph2.textContent = `Taka: ${updateBalance2} `;
      donationParagraph2.classList.add(
        "text-xl",
        "font-bold",
        "text-green-500"
      );
      const dateParagraph2 = document.createElement("p");
      dateParagraph2.textContent = getFormattedDate();

      historyItem2.appendChild(donationParagraph2);
      historyItem2.appendChild(titleParagraph2);
      historyItem2.appendChild(dateParagraph2);
      console.log(historyItem2);
      function getFormattedDate() {
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        };
        const now = new Date();
        const formattedDate = now.toLocaleString("en-US", options); // e.g. "Sep 25, 2024, 14:00"
        return `${formattedDate} GMT+6h (Bangladesh Standard Time)`;
      }
      const historyContainer2 = document.getElementById("history-list");
      historyContainer2.appendChild(historyItem2);
      historyContainer2.classList.add("border-2", "rounded-lg", "m-2");
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
      // donation history
      const donationTitle3 = document.getElementById("title3").textContent;
      const historyItem3 = document.createElement("div");
      historyItem3.classList.add(
        "bg-white",
        "p-3",
        "rounded-md",
        "border-2",

        "m-3",

        "items-center"
      );

      // donation title
      const titleParagraph3 = document.createElement("p");
      titleParagraph3.textContent = `${donationTitle3}`;
      titleParagraph3.classList.add("text-xl", "font-bold");
      const donationParagraph3 = document.createElement("p");
      donationParagraph3.textContent = `Taka: ${updateBalance3} `;
      donationParagraph3.classList.add(
        "text-xl",
        "font-bold",
        "text-green-500"
      );
      const dateParagraph3 = document.createElement("p");
      dateParagraph3.textContent = getFormattedDate();

      historyItem3.appendChild(donationParagraph3);
      historyItem3.appendChild(titleParagraph3);
      historyItem3.appendChild(dateParagraph3);
      console.log(historyItem3);
      function getFormattedDate() {
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        };
        const now = new Date();
        const formattedDate = now.toLocaleString("en-US", options); // e.g. "Sep 25, 2024, 14:00"
        return `${formattedDate} GMT+6h (Bangladesh Standard Time)`;
      }
      const historyContainer3 = document.getElementById("history-list");
      historyContainer3.appendChild(historyItem3);
      historyContainer3.classList.add("border-2", "rounded-lg", "m-2");
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

  document.getElementById("history-list").classList.remove("hidden");
  document.getElementById("donation-form").classList.add("hidden");

  donationTab.addEventListener("click", function () {
    donationTab.classList.add("bg-baseColor");
    historyTab.classList.remove("bg-baseColor");

    document.getElementById("history-list").classList.add("hidden");
    document.getElementById("donation-form").classList.remove("hidden");
  });
});

// assistant tab
