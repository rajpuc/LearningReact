import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";


const Header = () => {
  const data = useContext(DataContext);
  return (
    <header>This is Header : coming from DataContext --- {data}</header>
  );
};

export default Header;
