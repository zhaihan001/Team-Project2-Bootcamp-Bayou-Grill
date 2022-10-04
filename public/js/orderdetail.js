const backButtonHandler = () => document.location.replace("/orderhistory");

document
  .querySelector("#backButton")
  .addEventListener("click", backButtonHandler);
