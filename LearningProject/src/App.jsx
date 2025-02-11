import React, { useState } from "react";
import Parent from "./components/Parent";



// Props Drilling
// Props Drilling is a situation in React where props (data) are passed down multiple levels of components, even if some intermediate components don’t need the data.

//🔴 Problem: When a deeply nested component needs data, it has to be passed through multiple intermediate components, making the code harder to maintain.


const App = () => {
  
  return (
    <Parent grandChild="Rajesh Pal" />
  );
};

export default App;
