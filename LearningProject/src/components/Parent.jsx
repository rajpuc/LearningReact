import React from "react";
import Child from "./Child";


const Parent = ({ grandChild }) => {
  return(
    <>
        <Child grandChild={grandChild}/>
    </>

  );
};

export default Parent;
