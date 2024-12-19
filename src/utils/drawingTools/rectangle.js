import rough from "roughjs/bundled/rough.esm";

export function drawRectangle(context, element) {
  const start = element.points[0];
  const end = element.points[element.points.length - 1];

  const roughCanvas = rough.canvas(context.canvas);
  roughCanvas.rectangle(start.x, start.y, end.x - start.x, end.y - start.y, {
    stroke: element.strokeColor,
    strokeWidth: element.strokeWidth,
  });
}
