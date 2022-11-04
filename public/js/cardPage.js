const formAnswer = document.querySelector('.js-answer-f');

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer, id } = event.target;
    const response = await fetch(`/cards/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
      }),
    });
    const data = await response.json();
    const rightAnswer = event.target.querySelector('.right-answer');
    console.log(rightAnswer);
    if (data.status === true) {
      rightAnswer.innerHTML = data.message;
    } else {
      rightAnswer.innerHTML = data.message;
    }
  });
}
