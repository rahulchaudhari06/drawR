import React from "react";
import { Canvas } from "./components/Canvas";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">drawR</h1>
        <Canvas />
        {/* //!TODO add clear canvas function  */}
        {/* //!TODO add keybindings for tools */}
      </div>
      <footer className="mt-12 border-t pt-4 text-center text-gray-600">
        <p>More features coming soon 🎧</p>
        <p>
          {" "}
          <a
            href="https://github.com/rahulchaudhari06"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rahul
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
