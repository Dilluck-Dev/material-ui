import React from "react";

function Text() {
  return (
    <div>
      <h2 className="text-black-100 mb-10 text-2xl">Text</h2>
      <p>1)Text color(text-red-500)</p>
      <p className="mt-10">2)Text alignment(text-center)</p>
      <p className="text-center hover:text-left">Txt</p>
      <p className="mt-10">
        3)Text
        decoration-thickness(decoration-3)-red(underline)/uppercase(uppercase)/letter
        spacing(tracking-widest)/line-height(leading-10)--> decoration-red-500)
      </p>
      <p className="text-left decoration-2 decoration-red-500 underline uppercase tracking-widest leading-10">
        Text decoration style
      </p>
      <p>3)Text shadow(text-red-500)</p>

      <p className="drop-shadow-lg  blur-md ">Drop Shadow</p>
    </div>
  );
}

export default Text;
