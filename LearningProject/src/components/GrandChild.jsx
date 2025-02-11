import React from "react";

const GrandChild = ({ grandChild }) => {
  return (
    <h1 className="text-1xl bg-amber-400 text-white font-bold text-center mt-[300px] w-full">
      I am From GrandChild Components. And it is a example of Props drilling.
      And The grandChild name is : <span className="text-3xl text-fuchsia-600">{grandChild}</span> 
    </h1>
  );
};

export default GrandChild;
