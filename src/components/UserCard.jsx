import React from "react";

import ProfileBackground from "../assets/profile_background/3.jfif"

const UserCard = ({userProfile, job, name, isVerified}) =>{
    return (
        <div className=" w-52 h-60 relative overflow-hidden rounded-md bg-realWhite mr-5 mb-5">
            <img src={ProfileBackground} className=" w-full h-20" alt="" />
            <div className=" absolute top-8 left-10">
                <div className=" rounded-full mb-5 w-20 h-20 overflow-hidden">
                    <img src={userProfile} alt="" />
                </div>
                <h1 className=" mb-2 font-bold text-sm">{name}</h1>
                <p className=" text-xs">{job}</p>
            </div>
            <img src="https://img.icons8.com/?size=100&id=poVlgAcqxww6&format=png&color=4295fd" className=" absolute size-6 top-24 right-3" alt="" />
            <button className=" absolute bottom-0 w-full bg-brown text-realWhite p-1 text-sm">
                View Profile
            </button>
        </div>
    )
}

export default UserCard