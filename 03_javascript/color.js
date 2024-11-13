const button = document.querySelector('button');
const colorDisplay = document.querySelector('h2');

button.addEventListener('click', () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = rgbColor;

    colorDisplay.textContent = rgbColor;
});