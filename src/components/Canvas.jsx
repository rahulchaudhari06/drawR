import React, { useRef, useState } from "react";
import { useDrawing } from "../hooks/useDrawing";
import { useCanvas } from "../hooks/useCanvas";
import { ToolBar } from "./ToolBar";
import { DrawingCanvas } from "./DrawingCanvas";

export function Canvas() {
  const canvasRef = useRef(null);
  const [elements, setElements] = useState([]);
  const {
    drawing,
    currentElement,
    tool,
    setTool,
    startDrawing,
    draw,
    stopDrawing,
  } = useDrawing(elements, setElements);

  useCanvas(canvasRef, elements, currentElement);

  return (
    <div className="flex flex-col items-center gap-4">
      <ToolBar tool={tool} setTool={setTool} />
      <DrawingCanvas
        canvasRef={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
}
