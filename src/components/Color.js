import React from "react";

function Color() {
  return (
    <div>
      <h2 className="text-black-100 mb-10 text-2xl">Colors</h2>
      <p>1)Background color(bg-red-500)</p>
      <div
        className="bg-red-500"
        style={{ height: "100px", width: "200px" }}
      ></div>
      <p>2)Text color (text-red-500)</p>
      <p className="text-blue-700">Text Color</p>
      <p className="pt-10">3)Border Color(border-red-500)</p>
      <div className="border-2 border-sky-500 p-3 ">
        <p>border</p>
      </div>
    </div>
  );
}

export default Color;
