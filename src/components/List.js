import React from "react";

function List() {
  return (
    <div>
      <p className="mt-5">List Decimal</p>
      <ol className="list-decimal">
        <li>list one</li>
        <li>list two</li>
      </ol>
      <p className="mt-5">List Disc</p>
      <ul className="list-disc">
        <li>list one</li>
        <li>list two</li>
      </ul>
    </div>
  );
}

export default List;
