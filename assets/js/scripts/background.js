const backgroundShape = document.querySelectorAll("i.u-shape");

function shapePosition(shape) {
  shape.style.top = Math.floor(Math.random() * 100) + 1 + "vh";
  shape.style.left = Math.floor(Math.random() * 100) + 1 + "vw";
}

backgroundShape.forEach((shape) => {
  const shapeSize = Math.floor(Math.random() * 500) + 1 + "px";
  const shapeRotate = Math.floor(Math.random() * 500) + 1 + "deg";

  shape.style = `
  width: ${shapeSize};
  height: ${shapeSize};
  rotate: ${shapeRotate};
  `;

  shapePosition(shape);

  if (
    parseInt(shape.style.top) < 10 ||
    parseInt(shape.style.top) > 90 ||
    parseInt(shape.style.left) < 10 ||
    parseInt(shape.style.left) > 90
  ) {
    shapePosition(shape);
  }
});
