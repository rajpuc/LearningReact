import React, { useContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { DataContext } from "./context/UserContext";


const App = () => {
  // 9:
  const data = useContext(DataContext);

  //10: in this way you can use the DataContext in other components also. 
  return (
    <>
      <Header/>
      <h1>This is App.js : coming from DataContext --- {data}</h1>
      <Section/>
      <Footer/>
    </>
  );
};

export default App;