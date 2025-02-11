import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex bg-emerald-100 text-3xl items-center justify-between px-5 py-2">
        <h2>Sheryians</h2>
        <div className="flex gap-4 items-center">
          <h4 className="text-xl cursor-pointer">About</h4>
          <h4 className="text-xl cursor-pointer">Contact</h4>
          <h4 className="text-xl cursor-pointer">Services</h4>
          <h4 className="text-xl cursor-pointer">Your Account</h4>
        </div>
      </nav>
    </>
  );
};

export default Header;
