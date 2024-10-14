import React, { useState } from "react";

import Avartar from "../assets/avartar.png"

const MainPage = ({children}) =>{
    const LogoImg = "https://img.icons8.com/?size=100&id=6AxLGGiKDNdm&format=png&color=a8c604";

    const [isProfileDown, setIsProfileDown] = useState(false);
    const [isCommunityDown, setIsCommunityDown] = useState(false);
    const [isFavDown, setIsFavDown] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <>
            <div className="w-screen h-20 bg-dark flex pl-9 pr-9 items-center">
                <img src={LogoImg} alt="" className=" size-12 mr-3" />
                <h1 className=" text-green text-xl  ">TheToolX.com</h1>
                <div className="flex-grow">&nbsp;</div>
                <div className=" flex-row text-realWhite items-center relative flex">
                    <div className=" mr-5 relative hidden sm:block">
                        <button onMouseEnter={()=>{setIsFavDown(true)}} onMouseLeave={()=>{setIsFavDown(false)}} className=" flex flex-row items-center justify-between"><p className=" mr-2">Favorites</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                        {
                            isFavDown ? <div onMouseEnter={()=>{setIsFavDown(true)}} onMouseLeave={()=>{setIsFavDown(false)}} className=" absolute top-6 shadow-xl right-0 text-sm  w-40 bg-realWhite">
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=123441&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>Saved Tools</p></button>
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=10058&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Activity History</p></button>
                            </div> : <></>
                        }
                    </div>
                    <div className=" mr-10 relative hidden sm:block">
                        <button onMouseEnter={()=>{setIsCommunityDown(true)}} onMouseLeave={()=>{setIsCommunityDown(false)}} className=" flex flex-row items-center justify-between"><p className=" mr-2">Community</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                        {
                            isCommunityDown ? <div onMouseEnter={()=>{setIsCommunityDown(true)}} onMouseLeave={()=>{setIsCommunityDown(false)}} className=" absolute top-6 shadow-xl right-0 text-sm  w-28 bg-realWhite">
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=11220&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>Users</p></button>
                                <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=54386&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Forum</p></button>
                            </div> : <></>
                        }
                    </div>
                    <img src={Avartar} className="size-10 rounded-full cursor-pointer" alt="" onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} />
                    {
                        isProfileDown ? <div onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} className=" absolute top-6 shadow-xl text-sm right-0  w-36 bg-realWhite">
                            <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=33901&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>View Profile</p></button>
                            <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=26217&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Log Out</p></button>
                        </div> : <></>
                    }
                    <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" onMouseEnter={()=>{setIsMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false)}} className=" size-5 cursor-pointer ml-5 block sm:hidden" alt="" />
                    {
                        isMenuShown ? <div onMouseEnter={()=>{setIsMenuShown(true)}} onMouseLeave={()=>{setIsMenuShown(false)}} className=" absolute top-6 shadow-xl text-sm right-0  w-36 z-10 bg-realWhite"> 
                            <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=9438&format=png&color=14203a" className=" size-5 mr-3" alt="" /><p>Favorites</p></button>
                            <button className="w-full text-dark h-12 text-center text-start p-3 flex flex-row items-center hover:bg-hover"> <img src="https://img.icons8.com/?size=100&id=9438&format=png&color=14203a" className=" size-5 mr-3" alt="" /> <p>Community</p></button>
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