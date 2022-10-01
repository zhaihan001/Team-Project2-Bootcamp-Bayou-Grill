const backButtonHandler = () => document.location.replace("/orderhistory");

const exportButtonHandler = async (event) => {
  const url = event.target.baseURI;
  const urlId = url.substring(url.lastIndexOf("/") + 1);
  const response = await fetch(`/api/exportreceipt/${urlId}`);
  if (response.ok) {
    document.location.reload();
    alert("Order receipt downloaded.");
  } else {
    alert("We are unable to download your receipt now.");
  }
};

document.querySelector(".back").addEventListener("click", backButtonHandler);
document
  .querySelector(".export")
  .addEventListener("click", exportButtonHandler);
