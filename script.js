const canvas = document.getElementById('canvas');
const w = canvas.width;
const h = canvas.height;
const ctx = canvas.getContext("2d");
const points = document.getElementById('points');
const color = document.getElementById('color');

const getMiddlePoint = (p1, p2) => {
  return [
    (p1[0] + p2[0]) / 2,
    (p1[1] + p2[1]) / 2
  ];
};

const drawPoint = (x, y) => {
  ctx.beginPath();
  ctx.fillStyle = color.value; 
  ctx.arc(x, y, 1, 0, 2 * Math.PI, true);
  ctx.fill();
};

const initialPoints = [
  [w / 2, 20],
  [20, h - 20],
  [w - 20, h - 20]
];

triangle_random_point1 = initialPoints[(Math.random() * initialPoints.length) | 0];
triangle_random_point2 = initialPoints[(Math.random() * initialPoints.length) | 0];
p1 = getMiddlePoint(triangle_random_point1, triangle_random_point2)

const drawTriangle = () => {
  if (points.value <= 0) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, w, h);
    return;
  }
  
  initialPoints.forEach((p) => {
    drawPoint(p[0], p[1]);
  });
  drawPoint(p1[0], p1[1]);

  for (i = 0; i < points.value; i++) {
    triangle_random_point = initialPoints[(Math.random() * initialPoints.length) | 0];
    p2 = getMiddlePoint(triangle_random_point, p1)
    p1 = p2
    drawPoint(p2[0], p2[1]);
  }
};

const refresh = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, w, h);
  drawTriangle();
};

refresh();