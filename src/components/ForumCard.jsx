import React from "react";
import DarkButton from "./DarkButton";

const ForumCard = ({title, content, func, date, num}) =>{
    return (
        <div className=" relative w-80 h-40 bg-brown rounded-lg text-white mr-3">
            <h1 className=" m-4">
                {title}
            </h1>
            <p style={{fontSize:"11px", marginTop:"10px"}} className=" ml-4">{content}</p>
            <div className=" bottom-0 w-full absolute bg-orange h-10 flex justify-around items-center">
                <div className=" flex flex-row justify-center items-center">
                    <img className=" size-5 mr-1" src="https://img.icons8.com/?size=100&id=23&format=png&color=FFFFFF" alt="" />
                    <p>{date}</p>
                </div>
                <div className=" flex flex-row justify-center items-center">
                    <img className=" size-5 mr-1" src="https://img.icons8.com/?size=100&id=80085&format=png&color=FFFFFF" alt="" />
                    <p>{num}</p>
                </div>
                <div className=" w-20">
                    <DarkButton text={"See"} func={func} />
                </div>
            </div>
        </div>
    )
}

export default ForumCard