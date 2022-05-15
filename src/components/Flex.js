import React from "react";

function Flex() {
  return (
    <div>
      <p className="pt-5">1)Flex Basis</p>
      <div className="flex flex-row">
        <div className="h-24 basis-1/4 bg-red-500 "></div>
        <div className="h-24 basis-1/4 bg-green-500 "></div>
        <div className="h-24 basis-2/4 bg-red-500 "></div>
      </div>
      <p className="pt-5">1)Breakpoints</p>
      <div className="flex flex-row">
        <div className="h-24 basis-1/4 md:basis-1/3 bg-red-500 "></div>
        <div className="h-24 basis-1/4 md:basis-1/3  bg-green-500 "></div>
        <div className="h-24 basis-2/4 md:basis-1/3      bg-red-500 "></div>
      </div>

      <p className="pt-5">1)Flex Direction</p>
      <div className="flex md:flex-col 2xl:flex-row">
        <div className="h-24  bg-red-500 "></div>
        <div className="h-24  bg-green-500 "></div>
        <div className="h-24  bg-red-500 "></div>
      </div>
    </div>
  );
}

export default Flex;
