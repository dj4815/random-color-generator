const button = document.querySelector("button");
// const body = document.querySelector("body");
const h2 = document.querySelector("h2");

button.addEventListener("click", () => {
  const newColor = makeRandomColor();

  // Set current background color to the freshly generated values
  document.body.style.backgroundColor = newColor;

  // Set the text of the h2 to the new color values
  h2.innerText = `Current color: ${newColor}`;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
