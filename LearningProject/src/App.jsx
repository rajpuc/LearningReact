import { useState } from "react";

function App() {
  
  const [counter, setCounter] = useState(0);


  return (
    <>
      <h3>Simple Number Increment Decrement Project:</h3>
      <h1> Count {counter}</h1>
      <button onClick={()=>{setCounter( counter+1 )}}>Increment Counter</button>
      <button onClick={()=>{setCounter( counter-1 )}}>Decrement Counter</button>
    </>
  )
}

export default App
