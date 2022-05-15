import React from "react";

function Positioning() {
  return (
    <div>
      <p className="pt-5">1)Static</p>
      <div className="static bg-blue-500 h-24 w-24">
        <p>Static parent</p>
        <div className="absolute bottom-0 left-0 bg-red-500">
          <p>Absolute child</p>
        </div>
      </div>
      <p className="pt-5">2)Relatively</p>
      <div className="relative bg-blue-500 h-[300px] w-[400px]">
        <p>relative parent</p>
        <div className="absolute bottom-0 left-0 bg-red-500">
          <p>Absolute child</p>
        </div>
      </div>

      <p className="pt-5">3)Fixed</p>
      <div className="sticky bg-green-500 border-2 border-green">
        I am sticky!
      </div>

      <div className="pb-[400px]">
        <p>
          In this example, the sticky element sticks to the top of the page
          (top: 0), when you reach its scroll position.
        </p>
        <p>Scroll back up to remove the stickyness.</p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
        <p>
          Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
          definitiones no quo, maluisset concludaturque et eum, altera fabulas
          ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
          Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
          Eum no molestiae voluptatibus.
        </p>
      </div>
      <p className="p-5">Z-index</p>
      <div className="relative">
        <div className="z-100 h-20 w-20 bg-green-500 border-2 rounded-[50%] "></div>
        <div className="z-0 h-20 w-20 bg-red-500 border-2 rounded-[50%] left-[35px] top-[8px]  absolute "></div>
      </div>
    </div>
  );
}

export default Positioning;
