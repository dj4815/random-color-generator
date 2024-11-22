const button = document.querySelector("button");
// const body = document.querySelector("body");
let h2 = document.querySelector("h2");

button.addEventListener("click", () => {
  const r = `${Math.floor(Math.random() * 255)}, `;
  // console.log(r);
  const g = `${Math.floor(Math.random() * 255)}, `;
  // console.log(g);
  const b = `${Math.floor(Math.random() * 255)}`;
  // console.log(b);
  // console.log(currentBackgroundColor);
  const newColor = `rgb(${r}${g}${b})`;
  // Set current background color to the freshly generated values
  document.body.style.backgroundColor = newColor;

  // Set the text of the paragraph to the new color values
  h2.innerText = `Current color: ${newColor}`;

  // console.log(rgb);
});
