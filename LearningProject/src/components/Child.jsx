import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ grandChild }) => {
  return (
    <GrandChild grandChild={grandChild} />
  );
};

export default Child;
