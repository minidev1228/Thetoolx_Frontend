import React, { useState } from "react";

import MainPage from "./MainPage";
import UserCard from "../components/UserCard";

const UsersPage = () =>{

    const [users, setUsers] = useState([
        {profile: "/src/assets/users/user2.jpg", name: "Akira Ito", job: "Video Editor", isVerified:true},
        {profile: "/src/assets/users/user1.png", name: "Natalia Kiljanska", job: "Future Specialist Program in Tax Department", isVerified:true},
        {profile: "/src/assets/users/user3.png", name: "Adrianna Kata", job: "HR & Recruitment", isVerified:true},
        {profile: "/src/assets/users/user8.jfif", name: "Daniel Babin", job: "Student at Lazarski University", isVerified:true},
        {profile: "/src/assets/users/user4.png", name: "Queen Shingange", job: "Freelance Graphic Designer/Portrait Artist", isVerified:false},
    ])

    return (
        <MainPage>
            <div className=" w-screen p-10" style={{minHeight:"calc(100vh - 7.5rem)"}}>
                <div className=" flex flex-wrap justify-center">
                    {
                        users.map((user, key)=><UserCard key={key} userProfile={user.profile} name={user.name} job={user.job} isVerified={user.isVerified}/>)
                    }
                </div>
                <div></div>
            </div>
        </MainPage>
    )
}

export default UsersPage