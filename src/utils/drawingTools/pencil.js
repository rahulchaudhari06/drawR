import getStroke from "perfect-freehand";

export function drawPencil(context, element) {
  const stroke = getStroke(element.points, {
    size: element.strokeWidth * 2,
    thinning: 0.5,
    smoothing: 0.5,
    streamline: 0.5,
  });

  if (stroke.length < 2) return;

  context.beginPath();
  context.fillStyle = element.strokeColor;
  context.moveTo(stroke[0][0], stroke[0][1]);

  for (let i = 1; i < stroke.length; i++) {
    context.lineTo(stroke[i][0], stroke[i][1]);
  }

  context.fill();
}
