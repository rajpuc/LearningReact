import React, { useState } from "react";
import Card from "./components/Card";

// Props with JSON Array

const App = () => {
  const users = [
    {
      name: "Shah Rukh Khan",
      age: 58,
      city: "Mumbai",
      profession: "Actor",
      image: "https://picsum.photos/id/122/400/300",
    },
    {
      name: "Deepika Padukone",
      age: 28,
      city: "Mumbai",
      profession: "Actress",
      image: "https://picsum.photos/id/232/400/300",
    },
    {
      name: "Virat Kohli",
      age: 35,
      city: "Delhi",
      profession: "Cricketer",
      image: "https://picsum.photos/id/323/400/300",
    },
    {
      name: "Priyanka Chopra",
      age: 43,
      city: "Mumbai",
      profession: "Actress, Singer",
      image: "https://picsum.photos/id/433/400/300",
    },
    {
      name: "Ranbir Kapoor",
      age: 41,
      city: "Mumbai",
      profession: "Actor",
      image: "https://picsum.photos/id/253/400/300",
    },
  ];
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {users.map((item, index) => {
        
          return (<Card key={index}
            name={item.name}
            age={item.age}
            city={item.city}
            profession={item.profession}
            src={item.image}
          />);
      
      })}
    </div>
  );
};

export default App;
