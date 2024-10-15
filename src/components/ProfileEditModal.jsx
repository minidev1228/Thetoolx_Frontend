import React, { useState } from "react";

import BrownButton from "./BrownButton";
import IconInputField from "./IconInputField";

const LogoImg = "https://img.icons8.com/?size=100&id=7820&format=png&color=737373";

const ProfileEditModal = ({closeEventHandler}) =>{

    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [cPwd, setCPwd] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("")

    return (
        <div className=" w-screen h-screen top-0 left-0 fixed z-50 flex justify-center items-center" style={{backgroundColor:"rgb(37 50 79 / 64%)"}}>
            <div className=" w-full bg-realWhite p-5 max-w-96 pt-12 relative">
                <button className=" absolute top-3 right-3" onClick={closeEventHandler}>
                    <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=000000" className=" size-5" alt="" />
                </button>
                <div className="w-full h-min[100vh] mb-10 flex items-center flex-col">
                    <div className="w-80 bg-realWhite h-auto items-center flex flex-col relative">
                        <img src={LogoImg} className=" size-24" alt="" />
                        <div className=" w-full text-sm mt-10">
                            <IconInputField placholder={"Name"} type={"text"} img={"https://img.icons8.com/?size=100&id=23265&format=png&color=FFFFFF"} setValue={(val)=>{setUserName(val)}} value={userName} />
                        </div>
                        <div className=" w-full text-sm mt-10">
                            <IconInputField placholder={"Email"} type={"email"} img={"https://img.icons8.com/?size=100&id=2848&format=png&color=FFFFFF"} setValue={(val)=>{setEmail(val)}} value={email} />
                        </div>
                        <div className=" w-full text-sm mt-10">
                           <IconInputField placholder={"Phone Number"} type={"phone"} img={"https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF"} setValue={(val)=>{setPhone(val)}} value={phone} />
                        </div>
                        <div className=" w-full text-sm mt-10">
                           <IconInputField placholder={"Location"} type={"text"} img={"https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF"} setValue={(val)=>{setLocation(val)}} value={location} />
                        </div>
                        <div className=" w-full text-sm mt-10">
                            <IconInputField placholder={"Password"} type={"password"} img={"https://img.icons8.com/?size=100&id=10575&format=png&color=FFFFFF"} setValue={(val)=>{setPwd(val)}} value={pwd} />
                        </div>
                        <div className=" w-full text-sm mt-10">
                            <IconInputField placholder={"Password Confirm"} type={"password"} img={"https://img.icons8.com/?size=100&id=11371&format=png&color=FFFFFF"} setValue={(val)=>{setCPwd(val)}} value={cPwd} />
                        </div>
                    </div>
                </div>
                <BrownButton text={"Update"} />
            </div>
        </div>
    )
}

export default ProfileEditModal