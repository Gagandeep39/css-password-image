const passwordEl = document.getElementById('password');
const background = document.getElementById('background');

passwordEl.addEventListener('input', (event) => {
  const length = event.target.value.length;
  const blurValue = 20 / 2 - length;
  background.style.filter = `blur(${blurValue}px)`;
});
