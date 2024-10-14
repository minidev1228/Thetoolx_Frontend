import React from "react";

import MainPage from "./MainPage";
import BrownButton from "../components/BrownButton";

import ProfileBackground from "../assets/profile_background/2.jfif"
import MyImg from "../assets/avartar.png"

const MyProfilePage = () =>{
    return (
        <MainPage>
            <div style={{minHeight:"calc(100vh - 10rem)"}} className=" w-screen box-border p-12">
                <div className="flex flex-col sm:flex-row">
                    <div className=" w-full bg-realWhite h-64 rounded-lg overflow-hidden relative mb-5 sm:w-1/2 md:w-2/3">
                        <img src={ProfileBackground} className=" w-full h-28" alt="" />
                        <div className="absolute top-12 left-10 ">
                            <img src={MyImg} className="size-28 rounded-full mb-5" alt="" />
                            <div className=" flex flex-row justify-center items-center">
                                <h1 className=" text-lg font-extrabold mr-2">John Smith</h1>
                                <img src="https://img.icons8.com/?size=100&id=poVlgAcqxww6&format=png&color=4295fd" className=" size-5" alt="" />
                            </div>
                            <p className=" text-xs">CMO at SingleFire</p>
                        </div>
                    </div>
                    <div className=" w-full bg-realWhite h-64 p-5 rounded-lg overflow-hidden sm:ml-5 sm:w-1/2 md:w-1/3">
                        <h3 style={{borderBottom:"1px solid #80808040"}} className=" pb-5 mb-5">Intro</h3>
                        <div>
                        <div className=" flex flex-row mb-5">
                                <img src="https://img.icons8.com/?size=100&id=2784&format=png&color=14203a" className=" size-5 mr-2" alt="" />
                                <p>CMO at SingleFire</p>
                            </div>
                            <div className=" flex flex-row mb-5">
                                <img src="https://img.icons8.com/?size=100&id=9730&format=png&color=14203a" className=" size-5 mr-2" alt="" />
                                <p>+380 95 403 5978</p>
                            </div>
                            <div className=" flex flex-row mb-5">
                                <img src="https://img.icons8.com/?size=100&id=12623&format=png&color=14203a" className=" size-5 mr-2"  alt="" />
                                <p>mightybluedev@gmail.com</p>
                            </div>
                            <div className=" flex flex-row mb-5">
                                <img src="https://img.icons8.com/?size=100&id=7880&format=png&color=14203a" className=" size-5 mr-2"  alt="" />
                                <p>Delhi , India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-realWhite h-min-[40] rounded-lg p-5 mt-5">
                    <p>
                    👨🏻‍🎓 About Me : 🎖🎖🎖🥉🥉🏅🏅
I am an accomplished full-stack developer with over 11 years of experience in designing and developing web applications. My expertise lies in both front-end and back-end development, utilizing JavaScript frameworks like React and back-end technologies such as Node and PHP . I am dedicated to delivering high-quality solutions that meet client requirements and enhance user experience. 🏆
🤝 Let’s work together!
                    </p>
                </div>
                <div className=" w-20 mt-5">
                    <BrownButton text={"Edit"} func={()=>{}} />
                </div>
            </div>
        </MainPage>
    )
}

export default MyProfilePage