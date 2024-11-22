const button = document.querySelector("button");
// const body = document.querySelector("body");
let paragraph = document.querySelector("p");

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
  paragraph.innerText = `Current color: ${currentBackgroundColor}`;

  // Replace the current background color with the new background color
  body.style.backgroundColor = `${currentBackgroundColor}`;

  // console.log(rgb);
});
