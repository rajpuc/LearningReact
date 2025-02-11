import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardOne from "./components/cards/CardOne";
import CardTwo from "./components/cards/CardTwo";
import CardThree from "./components/cards/CardThree";
// Components
// Component file er name shob shomoy Upper case letter diye suru hobe.

const App = () => {
  return (
    <>
      <Header />
        <div className="flex items-center justify-between px-2">
          <CardOne />
          <CardOne />
          <CardOne />
        </div >
        <div className="flex items-center justify-between px-2">
          <CardTwo />
          <CardTwo />
          <CardTwo />
        </div>
        <div className="flex items-center justify-between px-2">
          <CardThree />
          <CardThree />
          <CardThree />
        </div>
      <Footer />
    </>
  );
};

export default App;
