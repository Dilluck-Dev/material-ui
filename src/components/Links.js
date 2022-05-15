import React from "react";

function Links() {
  return (
    <div>
      <p className="pt-5">Required</p>
      <input className="required:border-red-500 border-2  p-1" />
      <p className="pt-5">valid (:valid)</p>
      <input className="valid:border-green-500 border-2  p-1" />
      <p className="pt-5">Range(:in-range)</p>
      <input min="1" max="5" class="in-range:border-green-500 border-2" />
    </div>
  );
}

export default Links;
