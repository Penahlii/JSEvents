function checkAnswers() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  answers.forEach((answer) => {
    score += parseInt(answer.value);
  });

  document.getElementById(
    "result"
  ).textContent = `You got ${score} correct answers.`;
}
