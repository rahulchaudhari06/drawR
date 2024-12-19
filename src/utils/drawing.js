import { drawLine } from "./drawingTools/line";
import { drawRectangle } from "./drawingTools/rectangle";
import { drawPencil } from "./drawingTools/pencil";

export function drawElement(context, element) {
  const drawingTools = {
    line: drawLine,
    rectangle: drawRectangle,
    pencil: drawPencil,
  };

  const drawTool = drawingTools[element.type];
  if (drawTool) {
    drawTool(context, element);
  }
}
