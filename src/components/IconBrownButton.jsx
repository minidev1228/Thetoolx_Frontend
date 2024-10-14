import React from "react";

const IconBrownButton = ({text, func, icon}) =>{
    return (
        <button className="w-14 h-8 bg-brown text-white pl-3 pr-3 min-w-24 rounded text-sm w-full flex flex-row items-center justify-center" onClick={func}>
            <img src={icon} className=" size-5 mr-1" alt="" />
            <p>{text}</p>
        </button>
    )
}

export default IconBrownButton