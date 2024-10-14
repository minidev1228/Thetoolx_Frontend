import React, { useState } from "react";

import Avartar from "../assets/avartar.png"

const MainPage = ({children}) =>{
    const LogoImg = "https://img.icons8.com/?size=100&id=6AxLGGiKDNdm&format=png&color=a8c604";

    const [isProfileDown, setIsProfileDown] = useState(false);
    const [isCommunityDown, setIsCommunityDown] = useState(false);
    const [isFavDown, setIsFavDown] = useState(false);

    return (
        <>
            <div className="w-screen h-20 bg-dark flex pl-9 pr-9 items-center">
                <img src={LogoImg} alt="" className=" size-12 mr-3" />
                <h1 className=" text-green text-xl  ">TheToolX.com</h1>
                <div className="flex-grow">&nbsp;</div>
                <div className=" flex flex-row text-realWhite items-center relative">
                    <div className=" mr-5">
                        <button className=" flex flex-row items-center justify-between"><p className=" mr-2">Favorites</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                    </div>
                    <div className=" mr-10">
                    <button className=" flex flex-row items-center justify-between"><p className=" mr-2">Community</p><img src="https://img.icons8.com/?size=100&id=37319&format=png&color=FFFFFF" className=" size-5" alt="" /></button>
                    </div>
                    <img src={Avartar} className="size-10 rounded-full cursor-pointer" alt="" onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} />
                    {
                        isProfileDown ? <div onMouseEnter={()=>{setIsProfileDown(true)}} onMouseLeave={()=>{setIsProfileDown(false)}} className=" absolute top-5 right-5 h-52 w-36 bg-realWhite">
                            <button>View Profile</button>
                            <button>Log out</button>
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