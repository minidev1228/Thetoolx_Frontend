import React from "react";

const ChatItem = ({pic, name, date, content, func}) =>{
    return (
        <div className=" w-full max-w-96 bg-realWhite mt-3 rounded-md flex flex-row">
            <div className="text-sm p-2 flex flex-col justify-center items-center">
                <div className=" h-12 w-12 bg-brown rounded-full mb-1 mt-1 ml-1 overflow-hidden cursor-pointer" onClick={func}>
                    <img src={pic} alt="" />
                </div>
                <p style={{fontSize:"11px", textAlign:"center"}}>{name}</p>
            </div>
            <div className=" flex flex-col w-full">
                <div className="flex-grow p-3">
                    <p style={{fontSize:"12px"}}>
                        {content}
                    </p>
                </div>
                <div className=" h-5 w-full flex flex-row">
                    <div className="flex-grow">&nbsp;</div>
                    <img src="https://img.icons8.com/?size=100&id=34&format=png&color=4D4D4D" className=" size-3 mr-1" alt="" />
                    <p style={{fontSize:"10px", marginRight:"5px"}}>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatItem