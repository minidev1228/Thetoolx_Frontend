import React from "react";

const ToolCard = ({title, img, isNew, num}) =>{
    return (
        <div className=" bg-realWhite h-80 w-64 m-10 rounded-md p-10 flex justify-around flex-col items-center cursor-pointer relative mb-20 hover:shadow-lg">
            {
                isNew?<img className=" size-10 absolute right-5 top-5" src="https://img.icons8.com/?size=100&id=12423&format=png&color=0ea5e9" alt="" />:<></>
            }<img src={img} alt="" />
            <h3 className=" text-sm">{title}</h3>
            <div className=" flex items-center justify-center absolute bottom-5 right-5">
                <img className=" size-7 mr-2" src="https://img.icons8.com/?size=100&id=7877&format=png&color=14203a" alt="" />
                <p>{num}</p>
            </div>
        </div>
    )
}

export default ToolCard