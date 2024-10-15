import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BrownButton from "../components/BrownButton";
import ToolCard from "../components/ToolCard";
import BottomLineInupt from "../components/BottomLineInput";
import IconInputField from "../components/IconInputField";

const LandingPage = () =>{
    const navigate = useNavigate();

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
    const [currentState, setCurrentState] = useState(0);
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [cPwd, setCPwd] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("")

    return (
        <>
            <div className="w-screen h-20 bg-dark flex pl-9 pr-9 items-center">
                <img src={LogoImg} alt="" className=" size-12 mr-3 cursor-pointer" onClick={()=>{setCurrentState(0)}} />
                <h1 className=" text-green text-xl cursor-pointer" onClick={()=>{setCurrentState(0)}}>TheToolX.com</h1>
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
                    <div className="w-full flex flex-wrap mt-10 justify-center">
                        {
                            tools.map((tool, id)=><ToolCard key={id} img={tool.img} title={tool.title} num={tool.num} isNew={tool.isNew} />)
                        }
                    </div>
                </div> : currentState === 1 ? <div className="w-full h-screen flex items-center pt-20 flex-col">
                    <div className="w-80 bg-realWhite h-auto pt-5 items-center flex flex-col relative">
                        <img src={LogoImg} className=" size-14" alt="" />
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Name"} type={"text"} img={"https://img.icons8.com/?size=100&id=23265&format=png&color=FFFFFF"} setValue={(val)=>{setUserName(val)}} value={userName} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Password"} type={"password"} img={"https://img.icons8.com/?size=100&id=10575&format=png&color=FFFFFF"} setValue={(val)=>{setPwd(val)}} value={pwd} />
                        </div>
                        <div className=" mt-10 w-2/3">
                            <BrownButton text={"Log In"} func={()=>{navigate("/main/tools")}} />
                        </div>
                        <div className=" mt-16 mb-10 w-full flex justify-around text-sm">
                            <NavLink onClick={()=>{}}>Forgot password</NavLink>
                            <NavLink onClick={()=>{setCurrentState(2)}}>Sign Up</NavLink>
                        </div>
                        <div className=" w-full bg-dark h-1"></div>
                    </div>
                </div> : <div className="w-full h-min[100vh] mb-10 flex items-center pt-20 flex-col">
                    <div className="w-80 bg-realWhite h-auto pt-5 items-center flex flex-col relative">
                        <img src={LogoImg} className=" size-14" alt="" />
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Name"} type={"text"} img={"https://img.icons8.com/?size=100&id=23265&format=png&color=FFFFFF"} setValue={(val)=>{setUserName(val)}} value={userName} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Email"} type={"email"} img={"https://img.icons8.com/?size=100&id=2848&format=png&color=FFFFFF"} setValue={(val)=>{setEmail(val)}} value={email} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                           <IconInputField placholder={"Phone Number"} type={"phone"} img={"https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF"} setValue={(val)=>{setPhone(val)}} value={phone} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                           <IconInputField placholder={"Location"} type={"text"} img={"https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF"} setValue={(val)=>{setLocation(val)}} value={location} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Password"} type={"password"} img={"https://img.icons8.com/?size=100&id=10575&format=png&color=FFFFFF"} setValue={(val)=>{setPwd(val)}} value={pwd} />
                        </div>
                        <div className=" w-2/3 text-sm mt-10">
                            <IconInputField placholder={"Password Confirm"} type={"password"} img={"https://img.icons8.com/?size=100&id=11371&format=png&color=FFFFFF"} setValue={(val)=>{setCPwd(val)}} value={cPwd} />
                        </div>
                        <div className=" mt-10 w-2/3">
                            <BrownButton text={"Sign Up"} func={()=>{}} />
                        </div>
                        <NavLink className=" mt-10 mb-10" onClick={()=>{setCurrentState(1)}}>Log In</NavLink>
                        <div className=" w-full bg-dark h-1"></div>
                    </div>
                </div>
            }
            <div className="w-screen h-10 bg-dark text-realWhite flex flex-row-reverse pr-20 items-center italic text-sm">
                <p>Web Apps by TheToolX</p>
            </div>
        </>
    )
}

export default LandingPage