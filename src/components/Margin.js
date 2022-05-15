import React from "react";

function Margin() {
  return (
    <div>
      <p className="pt-10 ">1)Margin Top(mt-10)</p>
      <h1 className="border-t-2 border-red-700 mt-10  ">Border</h1>
      <p className="pt-10 ">2)Margin auto(m-auto)</p>
      <div className="h-10 w-[300px] bg-red-500 m-auto"></div>
      <p className="pt-10 ">3)Box Sizing(box-border)</p>
      <div className="h-10 w-[400px] bg-red-500 text-white p-8 border-2 border-black">
        <p> 400px(without border box) Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="h-10 w-[400px] bg-red-500 text-white p-8 box-border mt-10 border-2 border-black">
        400px(with border box) Lorem ipsum dolor sit amet.
      </div>
      <p className="pt-10 ">2)Max Width(max-w-sm)</p>
      <div className="h-10 max-w-lg bg-red-500 m-auto"></div>
    </div>
  );
}

export default Margin;
