var checkboxes = document.querySelectorAll("input");
var itemCount = 0;
var totalCost = 0;
var foodId = [];

const newFormHandler = async (event) => {
  event.preventDefault();

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      itemCount++;
      var price = parseInt(checkboxes[i].attributes.value.value);
      totalCost += price;
      foodId.push(checkboxes[i].attributes.id.value);
    }
  }

  if (itemCount == 0) {
    alert("Please select your food items before submit order");
  } else {
    const response = await fetch(`/api/submitorder`, {
      method: "POST",
      body: JSON.stringify({ itemCount, totalCost, foodId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
      alert(
        "Order Placed Successfully! \nPlease allw us 15-30 minutes to prepare your order before you come to pickup."
      );
    } else {
      alert("We are unable to take your order now. Please try again later.");
    }
  }
};

document
  .querySelector("#submitOrder")
  .addEventListener("click", newFormHandler);
