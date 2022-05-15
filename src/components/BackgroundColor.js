import React from "react";

function BackgroundColor() {
  return (
    <div>
      <p>1)Background color(bg-orange-500)</p>
      <h1 className="bg-orange-400 p-3">Background Color</h1>
      <p className="pt-10">2)Opacity(bg-orange-500 Opacity-50)</p>
      <h1 className="bg-orange-400 p-3 opacity-50">Background Color</h1>
      <p className="pt-10">
        3)Background Gradient(h-10 bg-gradient-to-r from-red-400 to-blue-100)
      </p>
      <div className="h-10 w-24 bg-gradient-to-r from-red-400 to-blue-100"></div>
      <p className="pt-10">4)Background Position(bg-right)</p>
      <div className="h-10 w-24 bg-gradient-to-r from-red-400 to-blue-100 bg-right"></div>
    </div>
  );
}

export default BackgroundColor;
