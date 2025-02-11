import React, { useState } from "react";
import axios from 'axios';

// API calling with axios



const App = () => {
  const [data,setData] = useState([]);

  const getData = async ()=>{
    const url = "https://picsum.photos/v2/list?page=2&limit=20";
    const response = await axios.get(url);
    
   setData( await response.data);
    console.log(data);
  }

  return (
    <>
    <button onClick={getData} className="bg-blue-300 px-2 py-1 rounded text-white font-medium m-5 active:scale-95">Get Data</button>
    <div className="m-5 bg-blue-50">
      {
        data.map((item,index)=>{
         return  <img key={index} src={item.download_url} /> 
        })
      }
    </div>
    </>
  );
};

export default App;