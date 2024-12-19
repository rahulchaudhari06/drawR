import { useEffect } from "react";
import { drawElement } from "../utils/drawing";

export function useCanvas(canvasRef, elements, currentElement) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context || !canvas) return;

    context.clearRect(0, 0, canvas.width, canvas.height);

    elements.forEach((element) => drawElement(context, element));

    if (currentElement) {
      drawElement(context, currentElement);
    }
  }, [elements, currentElement, canvasRef]);
}
