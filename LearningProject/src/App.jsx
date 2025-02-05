function App() {
  // Remember tumi jai kicu likho shob kintu ai function er moddhe likhte hobe.
  // akhon amra dekhbo kivbave amra eventlistener use korte pari.
  const printSomething = ()=>{
    console.log("Hello Rajesh");
  }
  return (
    <>
      <h1>Hello Rajesh</h1>
      <button onClick={printSomething}>Click Me</button>
    </>
  )
}

export default App
