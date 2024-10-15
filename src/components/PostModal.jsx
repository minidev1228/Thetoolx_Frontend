import React from "react";

import BrownButton from "./BrownButton";

const PostModal = ({topics, closeEventHandler}) =>{
    return (
        <div className=" w-screen h-screen top-0 left-0 fixed z-50 flex justify-center items-center" style={{backgroundColor:"rgb(37 50 79 / 64%)"}}>
            <div className=" w-full bg-realWhite p-5 max-w-96 pt-12 relative">
                <button className=" absolute top-3 right-3" onClick={closeEventHandler}>
                    <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" className=" size-5" alt="" />
                </button>
                <div className=" mb-5">
                    <label htmlFor="topic">Topic : </label>
                    <select name="" id="" className=" w-full outline-none" style={{border:"1px solid black"}}>
                        {
                            topics.map(topic=><option>{topic.name}</option>)
                        }
                    </select>
                </div>
                <div className=" mb-5">
                    <label htmlFor="title">Title : </label>
                    <input type="text" className=" w-full outline-none pl-1" style={{border:"1px solid black"}} name="" id="" />
                </div>
                <div className=" mb-5">
                    <label htmlFor="title">Content : </label>
                    <textarea type="text" className=" w-full outline-none p-1 resize-none h-44" style={{border:"1px solid black"}} name="" id=""></textarea>
                </div>
                <BrownButton text={"Post"} />
            </div>
        </div>
    )
}

export default PostModal