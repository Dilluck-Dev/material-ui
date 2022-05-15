import React from "react";

function Table() {
  return (
    <div>
      <p className="p-5">1)Border callapse,column width(auto) table</p>
      <table className="border-collapse border border-slate-500 table-auto">
        <tr>
          <td className="border border-slate-600">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisi
          </td>
          <td className="border border-slate-600">Lorem, ipsum dolor.</td>
        </tr>
        <tr>
          <td className="border border-slate-600">
            Lorem ipsum dolor sit amet.
          </td>
          <td className="border border-slate-600">Lorem, ipsum dolor.</td>
        </tr>
      </table>
      <p className="p-5">2)Border seperate,column fixed(auto) table</p>
      <table className="border-separate border border-slate-500 w-[400px]">
        <tr>
          <td className="border border-slate-600 table-fixed">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisi
          </td>
          <td className="border border-slate-600">Lorem, ipsum dolor.</td>
        </tr>
        <tr>
          <td className="border border-slate-600">
            Lorem ipsum dolor sit amet.
          </td>
          <td className="border border-slate-600">Lorem, ipsum dolor.</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
