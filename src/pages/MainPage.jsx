import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Avartar from "../assets/avartar.png"

const MainPage = ({children}) =>{
    const navigate = useNavigate();

    const LogoImg = "https://img.icons8.com/?size=100&id=6AxLGGiKDNdm&format=png&color=a8c604";

    const [isProfileDown, setIsProfileDown] = useState(false);
    const [isCommunityDown, setIsCommunityDown] = useState(false);
    const [isFavDown, setIsFavDown] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isFavMenuShown, setIsFavMenuShown] = useState(false);
    const [isComMenuShown, setIsComMenuShown] = useState(false);

    return (
        <>
            <div className="w-screen h-20 bg-dark flex pl-9 pr-9 items-center">
                <img src={LogoImg} alt="" className=" size-12 mr-3 cursor-pointer" onClick={()=>{navigate("/main/tools")}} />
                <h1 className=" text-green text-xl cursor-pointer" onClick={()=>{navigate("/main/tools")}}>TheToolX.com</h1>
                <div className="flex-grow">&nbsp;</div>
                <div className=" flex-row text-realWhite items-center relative flex">
                    <div className=" mr-5 relative hidden sm:block">
                        <button onMouseEnter={()=>{setIsFavDown(true)}} onMouseLeave={()=>{setIsFavDown(false)}} className=" flex flex-row items-center justify-between"><p className=" mr-2">Favorites</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                        {
                            isFavDown ? <div onMouseEnter={()=>{setIsFavDown(true)}} onMouseLeave={()=>{setIsFavDown(false)}} className=" absolute top-6 shadow-xl right-0 text-sm  w-40 bg-realWhite z-20">
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover" onClick={()=>{navigate("/main/saved_tool_page")}}> <img src="https://img.icons8.com/?size=100&id=123441&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>Saved Tools</p></button>
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover" onClick={()=>{navigate("/main/activity_history")}}> <img src="https://img.icons8.com/?size=100&id=10058&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Activity History</p></button>
                            </div> : <></>
                        }
                    </div>
                    <div className=" mr-10 relative hidden sm:block">
                        <button onMouseEnter={()=>{setIsCommunityDown(true)}} onMouseLeave={()=>{setIsCommunityDown(false)}} className=" flex flex-row items-center justify-between"><p className=" mr-2">Community</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                        {
                            isCommunityDown ? <div onMouseEnter={()=>{setIsCommunityDown(true)}} onMouseLeave={()=>{setIsCommunityDown(false)}} className=" absolute top-6 z-20 shadow-xl right-0 text-sm  w-28 bg-realWhite">
                                <button onClick={()=>{navigate("/main/users")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=11220&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>Users</p></button>
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover" onClick={()=>{navigate("/main/forum")}}> <img src="https://img.icons8.com/?size=100&id=54386&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Forum</p></button>
                            </div> : <></>
                        }
                    </div>
                    <img src={Avartar} className="size-10 rounded-full cursor-pointer" alt="" onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} />
                    {
                        isProfileDown ? <div onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} className=" absolute z-20 top-6 shadow-xl text-sm right-0  w-36 bg-realWhite">
                            <button onClick={()=>{navigate("/main/my-profile")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=33901&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>View Profile</p></button>
                            <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=26217&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Log Out</p></button>
                        </div> : <></>
                    }
                    <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" onMouseEnter={()=>{setIsMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false)}} className=" size-5 cursor-pointer ml-5 block sm:hidden" alt="" />
                    {
                        isFavMenuShown ? <div onMouseEnter={()=>{setIsMenuShown(true), setIsFavMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false), setIsFavMenuShown(false)}} className=" absolute top-6 shadow-xl text-sm right-36  w-36 z-10 bg-realWhite"> 
                            <button onClick={()=>{navigate("/main/saved_tool_page")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=123441&format=png&color=14203a" className=" size-5 mr-3" alt="" />
                                <p>Saved Tools</p>
                            </button>
                            <button onClick={()=>{navigate("/main/activity_history")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=10058&format=png&color=14203a" className=" size-5 mr-3" alt="" /> 
                                <p>Activity History</p>
                            </button>
                        </div> : <></>
                    }
                    {
                        isComMenuShown ? <div onMouseEnter={()=>{setIsMenuShown(true), setIsComMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false), setIsComMenuShown(false)}} className=" absolute top-6 shadow-xl text-sm right-36  w-36 z-10 bg-realWhite"> 
                            <button onClick={()=>{navigate("/main/users")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=11220&format=png&color=14203a" className=" size-5 mr-3" alt="" />
                                <p>Users</p>
                            </button>
                            <button onClick={()=>{navigate("/main/forum")}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=54386&format=png&color=14203a" className=" size-5 mr-3" alt="" /> 
                                <p>Forum</p>
                            </button>
                        </div> : <></>
                    }
                    {
                        isMenuShown ? <div onMouseEnter={()=>{setIsMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false)}} className=" absolute top-6 shadow-xl text-sm right-0  w-36 z-10 bg-realWhite"> 
                            <button onMouseEnter={()=>{setIsFavMenuShown(true)}} onMouseLeave={()=>{setIsFavMenuShown(false)}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=9438&format=png&color=14203a" className=" size-5 mr-3" alt="" />
                                <p>Favorites</p>
                            </button>
                            <button onMouseEnter={()=>{setIsComMenuShown(true)}} onMouseLeave={()=>{setIsComMenuShown(false)}} className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> 
                                <img src="https://img.icons8.com/?size=100&id=9438&format=png&color=14203a" className=" size-5 mr-3" alt="" /> 
                                <p>Community</p>
                            </button>
                        </div> : <></>
                    }
                </div>
            </div>
            {children}
            <div className="w-screen h-20 bg-dark text-realWhite flex flex-row-reverse pr-20 items-center italic text-sm">
                <p>Web Apps by TheToolX</p>
            </div>
        </>
    )
}

export default MainPage