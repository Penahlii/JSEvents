function displayText() {
  const textInput = document.getElementById("textInput").value;
  const textStyle = document.getElementById("textStyle").value;
  const output = document.getElementById("output");

  let styledText;
  switch (textStyle) {
    case "bold":
      styledText = `<strong>${textInput}</strong>`;
      break;
    case "italic":
      styledText = `<em>${textInput}</em>`;
      break;
    case "underline":
      styledText = `<u>${textInput}</u>`;
      break;
    default:
      styledText = textInput;
  }

  output.innerHTML = styledText;
}
