function placeOrder() {
  const book = document.getElementById("book").value;
  const quantity = document.getElementById("quantity").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("address").value;
  const comments = document.getElementById("comments").value;
  const confirmation = document.getElementById("confirmation");

  confirmation.textContent = `${name}, thank you for your order. ${quantity} copy/copies of ${book} will be delivered on ${date} to ${address}. Comments: ${comments}`;
}
