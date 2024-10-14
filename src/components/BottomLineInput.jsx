import React from "react";

const BottomLineInupt = ({value, setValue, type}) =>{
    return (
        <input type={type} className=" border-none outline-none w-full" style={{borderBottom:"1px solid gray"}} value={value} onChange={(e)=>{setValue(e.target.value)}} />
    )
}

export default BottomLineInupt