import React from "react";

const Card = (props) =>{
    return (
        <div className="text-3xl font-extrabold"> Passed Property : {props.passedProperty}</div>
    );
}

export default Card;