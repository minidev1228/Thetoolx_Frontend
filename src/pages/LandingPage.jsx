import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BrownButton from "../components/BrownButton";
import ToolCard from "../components/ToolCard";
import BottomLineInupt from "../components/BottomLineInput";

const LandingPage = () =>{
    const LogoImg = "https://img.icons8.com/?size=100&id=6AxLGGiKDNdm&format=png&color=a8c604";

    const [tools, setTools] = useState([
        {img:"https://img.icons8.com/?size=100&id=106753&format=png&color=14203a", title:"Video downloader", isNew:true, num:5764},
        {img:"https://img.icons8.com/?size=100&id=37326&format=png&color=14203a", title:"Youtube downloader", isNew:true, num:8887},
        {img:"https://img.icons8.com/?size=100&id=8824&format=png&color=14203a", title:"Twitter downloader", isNew:false, num:8887},
        {img:"https://img.icons8.com/?size=100&id=GIWBO7Csvsvc&format=png&color=14203a", title:"Youtube to MP3", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=9470&format=png&color=14203a", title:"Calculator", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=41273&format=png&color=14203a", title:"Speed test", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=PqJ2kSnwUOWY&format=png&color=14203a", title:"IFSC Code Finder", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=118638&format=png&color=14203a", title:"TikTok Video Downloader", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=8818&format=png&color=14203a", title:"Facebook video downloader", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=53433&format=png&color=14203a", title:"Image background remover", isNew:false, num:675}
    ])
    const [currentState, setCurrentState] = useState(2);
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [cPwd, setCPwd] = useState("");

    return (
        <>
            <div className="w-screen h-20 bg-dark flex pl-9 pr-9 items-center">
                <img src={LogoImg} alt="" className=" size-12 mr-3" />
                <h1 className=" text-green text-xl  ">TheToolX.com</h1>
                <div className="flex-grow">&nbsp;</div>
                <div>
                    <BrownButton text={"Log In"} func={()=>{setCurrentState(1)}} />
                </div>
            </div>
            {
                currentState === 0 ? <div className=" w-full pl-10 pt-10 pr-10 mt-10">
                    <div className="pb-10" style={{borderBottom: "1px solid #8080803d"}}>
                        <h1 className=" text-3xl font-extrabold mb-4">Web Apps by TheToolX</h1>
                        <p style={{color:"#14203a82"}}>Download, Calculator, Test, Find</p>
                    </div>
                    <div className="w-full flex flex-wrap mt-10">
                        {
                            tools.map((tool, id)=><ToolCard key={id} img={tool.img} title={tool.title} num={tool.num} isNew={tool.isNew} />)
                        }
                    </div>
                </div> : currentState === 1 ? <div className="w-full h-screen flex items-center pt-20 flex-col">
                    <div className="w-80 bg-realWhite h-auto pt-20 items-center flex flex-col relative">
                        <NavLink className=" top-5 left-5 absolute flex justify-center items-center text-sm" onClick={()=>{setCurrentState(0)}}> <img src="https://img.icons8.com/?size=100&id=40217&format=png&color=14203a" className=" size-3 mr-1" alt="" /> Go Home</NavLink>
                        <div className=" absolute right-5 top-5">
                            <h1>Log In</h1>
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <label htmlFor="user_name">User Name :</label>
                            <BottomLineInupt value={userName} type={"text"} setValue={(val)=>{setUserName(val)}} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <label htmlFor="user_name">Password :</label>
                            <BottomLineInupt value={pwd} type={"password"} setValue={(val)=>{setPwd(val)}} />
                        </div>
                        <div className=" mt-10 w-2/3">
                            <BrownButton text={"Log In"} func={()=>{}} />
                        </div>
                        <NavLink className=" mt-10 mb-10" onClick={()=>{setCurrentState(2)}}>Sign Up</NavLink>
                        <div className=" w-full bg-dark h-1"></div>
                    </div>
                </div> : <div className="w-full h-screen flex items-center pt-20 flex-col">
                    <div className="w-80 bg-realWhite h-auto pt-20 items-center flex flex-col relative">
                        <NavLink className=" top-5 left-5 absolute flex justify-center items-center text-sm" onClick={()=>{setCurrentState(0)}}> <img src="https://img.icons8.com/?size=100&id=40217&format=png&color=14203a" className=" size-3 mr-1" alt="" /> Go Home</NavLink>
                        <div className="absolute right-5 top-5">
                            <h1>Sign Up</h1>
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <label htmlFor="user_name">User Name :</label>
                            <BottomLineInupt value={userName} type={"text"} setValue={(val)=>{setUserName(val)}} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <label htmlFor="pwd1">Password :</label>
                            <BottomLineInupt value={pwd} type={"password"} setValue={(val)=>{setPwd(val)}} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <label htmlFor="pwd2">Password Confirm :</label>
                            <BottomLineInupt value={cPwd} type={"password"} setValue={(val)=>{setCPwd(val)}} />
                        </div>
                        <div className=" mt-10 w-2/3">
                            <BrownButton text={"Sign Up"} func={()=>{}} />
                        </div>
                        <NavLink className=" mt-10 mb-10" onClick={()=>{setCurrentState(1)}}>Log In</NavLink>
                        <div className=" w-full bg-dark h-1"></div>
                    </div>
                </div>
            }
            <div className="w-screen h-20 bg-dark text-realWhite flex flex-row-reverse pr-20 items-center italic text-sm">
                <p>Web Apps by TheToolX</p>
            </div>
        </>
    )
}

export default LandingPage