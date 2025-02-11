import React, { useState } from "react";
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Header from "./components/Header";

// React Router DOM

const App = () => {
  
  return (
    <>
      {/* 3rd step: Now you can do whatever you want */}
      <Header/>
      {/* 2nd step: Create your project route like this: */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </>
  );
};

export default App;