import { useState } from "react";

export function useDrawing(elements, setElements) {
  const [drawing, setDrawing] = useState(false);
  const [currentElement, setCurrentElement] = useState(null);
  const [tool, setTool] = useState("pencil");

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const element = {
      id: Date.now().toString(),
      type: tool,
      points: [{ x: offsetX, y: offsetY }],
      strokeColor: "#000000",
      strokeWidth: 2,
    };
    setCurrentElement(element);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing || !currentElement) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const newPoint = { x: offsetX, y: offsetY };
    const updatedElement = {
      ...currentElement,
      points: [...currentElement.points, newPoint],
    };
    setCurrentElement(updatedElement);
  };

  const stopDrawing = () => {
    if (!drawing || !currentElement) return;
    setElements((prev) => [...prev, currentElement]);
    setCurrentElement(null);
    setDrawing(false);
  };

  return {
    drawing,
    currentElement,
    tool,
    setTool,
    startDrawing,
    draw,
    stopDrawing,
  };
}
