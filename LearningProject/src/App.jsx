function App() {
  // Akhon amra dekhbo react a State er use kno kori amra:
  //First Code ta pore asho then nicher comment ta poro.
  // suppose amra button click akta user er name change korte chai tahole sheta para jai kina dekho:
  let userName = "Rajesh"
  const changeUserName = ()=>{
    userName = "Rajesh Pal"
  }

  return (
    <>
      <h1>User Name is {userName}</h1>
      <button onClick={changeUserName}>Change User Name</button>
      // ata run korale dekhbe button click korleo Name change hocce na.
    </>
  )
}

export default App
