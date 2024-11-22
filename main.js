const button = document.querySelector("button");
const body = document.querySelector("body");
let currentColorValues = document.querySelector("p");
let currentBackgroundColor = body.style.backgroundColor;

button.addEventListener("click", () => {
  let r = `${Math.floor(Math.random() * 255)}, `;
  // console.log(r);
  let g = `${Math.floor(Math.random() * 255)}, `;
  // console.log(g);
  let b = `${Math.floor(Math.random() * 255)}`;
  // console.log(b);
  // console.log(currentBackgroundColor);

  // Set current background color to the freshly generated values
  currentBackgroundColor = `rgb(${r}${g}${b})`;

  // Set the text of the paragraph to the new color values
  currentColorValues.innerText = `Current color: ${currentBackgroundColor}`;

  // Replace the current background color with the new background color
  body.style.backgroundColor = `${currentBackgroundColor}`;

  // console.log(rgb);
});
