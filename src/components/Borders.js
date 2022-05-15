import React from "react";

function Borders() {
  return (
    <div>
      <p className="pt-10 ">1)Border(border-2 p-3 border-red-400)</p>
      <h1 className="border-2 p-3 border-red-400">Border</h1>
      <p className="pt-10 ">
        2)Border styles/dashed and bottom (border-dashed)
      </p>
      <h1 className="border-b-2 border-dashed p-3 border-red-400">Border</h1>
      <p className="pt-10 ">3)Border radius(rounded-xl)</p>
      <h1 className="border-2 rounded-t-xl p-3 border-red-400">Border</h1>
    </div>
  );
}

export default Borders;
