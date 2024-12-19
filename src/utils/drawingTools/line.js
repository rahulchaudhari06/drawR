import rough from "roughjs/bundled/rough.esm";

export function drawLine(context, element) {
  const start = element.points[0];
  const end = element.points[element.points.length - 1];

  const roughCanvas = rough.canvas(context.canvas);
  roughCanvas.line(start.x, start.y, end.x, end.y, {
    stroke: element.strokeColor,
    strokeWidth: element.strokeWidth,
  });
}
