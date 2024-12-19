import React from "react";

export function ToolBar({ tool, setTool }) {
  return (
    <div className="flex gap-2">
      <button
        className={`px-4 py-2 rounded ${
          tool === "pencil" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setTool("pencil")}
      >
        Pencil
      </button>
      <button
        className={`px-4 py-2 rounded ${
          tool === "line" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setTool("line")}
      >
        Line
      </button>
      <button
        className={`px-4 py-2 rounded ${
          tool === "rectangle" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
        onClick={() => setTool("rectangle")}
      >
        Rectangle
      </button>
    </div>
  );
}
