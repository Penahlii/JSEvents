function addMessage() {
  const messageInput = document.getElementById("messageInput");
  const messageList = document.getElementById("messageList");

  if (messageInput.value.trim() !== "") {
    const newMessage = document.createElement("li");
    newMessage.className = "message-item";
    newMessage.textContent = messageInput.value;
    messageList.appendChild(newMessage);

    messageInput.value = "";
  } else {
    alert("Please enter a message.");
  }
}
