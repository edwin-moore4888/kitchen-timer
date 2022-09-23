const button = document.getElementById('button');

button.addEventListener('click', () => {
  const input = document.querySelector('#input');
  const output = document.querySelector('#output');

  let time = Number(input.value);
  output.value = Number(input.value);

  const timer = setInterval(() => {
    time -= 1;
    output.value = time;

    if (time === 0) {
      clearInterval(timer);
    }
  }, 1000);
});