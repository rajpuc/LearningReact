import React, { useState } from "react";
import Card from "./components/Card";
import AnotherCard from "./components/AnotherCard";


// Props 

const App = () => {
  const passedProperty = "Hello There";
  return (
    <>
      {/* 1st way of passing a property */}
      <Card passedProperty={passedProperty}/>
      {/* 2nd way of passing a property */}
      <Card passedProperty="you can also use this syntax"/>
      {/* Another way of Recieve a property. Please Go to AnotherCard.jsx to learn: */}
      <AnotherCard username="Rajesh Pal" city="Rangamati" age="25"/>

    </>
  );
};

export default App;
