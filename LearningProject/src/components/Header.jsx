import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-2 bg-amber-100">
      <h1 className="text-3xl font-bold">Sheriyans</h1>
      <div className="flex items-center gap-4">
        <div className="text-xl font-medium">
          <Link to="/">Home</Link>
        </div>
        <div className="text-xl font-medium">
          <Link to="/about">About</Link>
        </div>
        <div className="text-xl font-medium">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="text-xl font-medium">
          <Link to="/product">Product</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
