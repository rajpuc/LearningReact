function App() {
  let userName = "Rajesh"
  const changeUserName = ()=>{
    // akhon amra userName print kore dekhi:
    console.log("before click : ", userName);
    userName = "Rajesh Pal";
    console.log("After click : ", userName);
    //ata run korale dekhte pabe userName tik e change hocce but UI a sheta update hoi na variable use korle. Er karon hocce amra react use korci. Mane amra akhon directly DOM er sathe interect korte parbo na er jonno amader React k bolte hobe kothai ki korte hobe. na hole sha kaj ta korbe na.
  }

  return (
    <>
      <h1>User Name is {userName}</h1>
      <button onClick={changeUserName}>Change User Name</button>
    </>
  )
}

export default App
