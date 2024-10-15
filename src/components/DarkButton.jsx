import React from "react";

const DarkButton = ({text, func}) =>{
    return (
        <button className="w-14 h-8 pl-3 pr-3 min-w-24 rounded text-sm w-full text-dark hover:bg-dark hover:text-realWhite" style={{border:"1px solid black"}} onClick={func}>
            {text}
        </button>
    )
}

export default DarkButton