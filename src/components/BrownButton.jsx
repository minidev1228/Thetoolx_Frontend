import React from "react";

const BrownButton = ({text, func}) =>{
    return (
        <button className="w-14 h-8 bg-brown text-white pl-3 pr-3 min-w-24 rounded text-sm" onClick={func}>
            {text}
        </button>
    )
}

export default BrownButton