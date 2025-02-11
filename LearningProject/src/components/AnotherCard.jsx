import React from "react";

const AnotherCard = ({username,city,age})=>{
    return (
        <div className="bg-red-100 w-fit p-5 rounded-lg ml-5 mt-5 text-xl font-semibold">
            <h1> Username: {username}</h1>
            <h2>City :{city}</h2>
            <h2>Age : {age}</h2>
            <button className="bg-amber-200 px-3 py-1.5 rounded-md border mt-5">Add Friend</button>
        </div>
    );
}

export default AnotherCard;