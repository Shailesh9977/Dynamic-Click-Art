# Dynamic Click Art 🎨

A fun and interactive web project built with **HTML, CSS, and JavaScript**. When you click anywhere on the screen, it dynamically generates random colorful geometric shapes (such as circles, squares, rectangles, triangles, pyramids, and cones) containing the name **"Shailesh"** along with smooth animations!

---

## Main Features & Code Implementation

Here is a breakdown of how each feature is implemented with its corresponding code:

### 1. Click Event & Dynamic Element Creation (JavaScript)
To capture mouse clicks anywhere on the screen and dynamically create new HTML elements on the fly, this JavaScript code is used:

              javascript

document.body.addEventListener("click", (event) => {
  const shape = document.createElement("div");
  // Appends the newly created shape element at the mouse click position
  document.body.appendChild(shape);
});


Random Shape Selector (JavaScript)
To randomly pick a shape from a list of options (Circle, Square, Rectangle, Triangle, 
Pyramid, and Cone) on every click, this array and logic are used:


const shapes = ["circle", "square", "rectangle", "triangle", "pyramid", "cone"];
const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
shape.className = `shape ${randomShape}`;


          Geometric Shapes using CSS Clip-Path (CSS)

To design complex geometric shapes like triangles, pyramids, and cones using pure CSS 
without relying on external images, the clip-path property is utilized:


.shape.triangle {
  width: 70px;
  height: 70px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.shape.pyramid {
  width: 70px;
  height: 70px;
  clip-path: polygon(50% 0%, 100% 70%, 50% 100%, 0% 70%);
}

.shape.cone {
  width: 70px;
  height: 70px;
  clip-path: polygon(50% 0%, 100% 85%, 85% 100%, 15% 100%, 0% 85%);


  Smooth Scale & Fade Animation (CSS Keyframes)
To make the shapes scale up, rotate, and smoothly fade out after appearing on the screen, keyframe animations are applied:


@keyframes growAndFade {
  0% {
    transform: translate(-50%, -50%) scale(0.8) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.8) rotate(30deg);
    opacity: 0;
  }
}
}
