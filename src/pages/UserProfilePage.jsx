import React from "react";

import MainPage from "./MainPage";
import BrownButton from "../components/BrownButton";

import ProfileBackground from "../assets/profile_background/3.jfif"
import MyImg from "../assets/users/user2.jpg"

const UsreProfilePage = () =>{
    return (
        <MainPage>
            <div style={{minHeight:"calc(100vh - 7.5rem)"}} className=" w-screen box-border p-12">
                <div className="flex flex-col sm:flex-row">
                    <div className=" w-full bg-realWhite h-64 rounded-lg overflow-hidden relative mb-5 sm:w-1/2 md:w-2/3">
                        <img src={ProfileBackground} className=" w-full h-28" alt="" />
                        <div className="absolute top-12 left-10 ">
                            <div className="rounded-full mb-5 h-28 w-28 overflow-hidden">
                                <img src={MyImg} alt="" />
                            </div>
                            <div className=" flex flex-row justify-center items-center">
                                <h1 className=" text-lg font-extrabold mr-2">Akira Ito</h1>
                                <img src="https://img.icons8.com/?size=100&id=poVlgAcqxww6&format=png&color=4295fd" className=" size-5" alt="" />
                            </div>
                            <p className=" text-xs">Video Editor</p>
                        </div>
                    </div>
                    <div className=" w-full bg-realWhite h-64 p-5 rounded-lg overflow-hidden sm:ml-5 sm:w-1/2 md:w-1/3">
                        <h3 style={{borderBottom:"1px solid #80808040"}} className=" pb-5 mb-5">Intro</h3>
                        <div>
                        <div className=" flex flex-row mb-5">
                                <div></div>
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
                                <p>Tokyo , Japan</p>
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
                <div className=" w-full flex flex-row">
                    <div className=" w-20 mt-5">
                        <BrownButton text={"Follow"} func={()=>{}} />
                    </div>
                    <div className=" flex-grow">
                        &nbsp;
                    </div>
                    <div className=" w-min-[5] mt-5 bg-realWhite flex flex-row justify-center items-center pl-2 pr-2 text-sm">
                        <span className=" mr-1">Follower: </span>
                        <p className="">1220&nbsp;&nbsp;</p>
                        <span>/&nbsp;&nbsp;Following: </span>
                        <p>1220</p>
                    </div>
                </div>
            </div>
        </MainPage>
    )
}

export default UsreProfilePage