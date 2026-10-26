


document.body.addEventListener("click", (event) => {
  const shape = document.createElement("div");


  
  const shapes = ["circle", "square", "rectangle", "triangle", "pyramid", "cone"];
  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  shape.className = `shape ${randomShape}`;

  
  const textSpan = document.createElement("span");
  textSpan.className = "shape-text";
  textSpan.textContent = "Hello";
  shape.appendChild(textSpan);

  
  const x = event.clientX;
  const y = event.clientY;

  shape.style.left = `${x}px`;
  shape.style.top = `${y}px`;

  
  const colors = [
    "#FF5733",
    "#3357FF",
    "#FFC300",
    "#8E44AD",
    "#2ECC71",
    "#FF33A8",
    "#00F5D4",
    "#FF8000"
  ];

  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  shape.style.backgroundColor = randomColor;

  document.body.appendChild(shape);

  setTimeout(() => {
    shape.remove();
  }, 4000);
});
