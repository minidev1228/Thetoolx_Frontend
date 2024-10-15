import React from "react";

const IconInputField = ({type, img, value, setValue, placholder}) =>{
    return (
        <div className=" w-full h-8 flex flex-row rounded-md overflow-hidden" style={{border:"1px solid #b29063"}}>
            <div className=" bg-brown h-full w-10 flex justify-center items-center mr-1">
                <img src={img} className=" size-5" alt="" />
            </div>
            <input className=" outline-none border-none h-full" type={type} placeholder={placholder} value={value} onChange={e=>{setValue(e.target.value)}} />
        </div>
    )
}

export default IconInputField