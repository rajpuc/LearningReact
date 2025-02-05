import { useState } from "react";

function App() {
  // Akhon dekhbo problem tar solutio. Er jonno amader hook use korte hobe.
  // hook hocce special type of function. Jgula state management a help kore. dorun apner akta variable ace 'a' jar value initially 1. Apni chaccen a er value update kore 2 korer jonno. ai j a er value 1 teke 2 hobe ata kei bole a er state change ba update howa. Toh ai state management er jonno amra muloto react hook use kori.
  // aikhane amra useState hook er use dekhbo.
  
  const [userName, setUserName] = useState("Rajesh");

  const changeUserName = ()=>{
    setUserName("Rajesh Pal");
  }
  // akhon button click korle dekhbe shob amader expectation onujayi kaj korce.

  return (
    <>
      <h1>User Name is {userName}</h1>
      <button onClick={changeUserName}>Change User Name</button>
    </>
  )
}

export default App
