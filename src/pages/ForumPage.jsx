import React, { useState } from "react";

import MainPage from "./MainPage";
import BrownButton from "../components/BrownButton";
import ForumCard from "../components/ForumCard";
import ChatItem from "../components/ChatItem";

const ForumPage = () =>{

    const [topics, setTopics] = useState(
        [
            {name:"Funny", img:"https://img.icons8.com/?size=100&id=63376&format=png&color=FFFFFF"}, 
            {name:"Movies", img:"https://img.icons8.com/?size=100&id=2791&format=png&color=FFFFFF"}, 
            {name:"Science", img:"https://img.icons8.com/?size=100&id=vjy99_yvYQXH&format=png&color=FFFFFF"}, 
            {name:"Gaming", img:"https://img.icons8.com/?size=100&id=WQV0m5UDUsBg&format=png&color=FFFFFF"}, 
            {name:"Music", img:"https://img.icons8.com/?size=100&id=12654&format=png&color=FFFFFF"},
            {name:"Books", img:"https://img.icons8.com/?size=100&id=41414&format=png&color=FFFFFF"}, 
            {name:"Food", img:"https://img.icons8.com/?size=100&id=2395&format=png&color=FFFFFF"}, 
            {name:"School", img:"https://img.icons8.com/?size=100&id=11173&format=png&color=FFFFFF"}, 
            {name:"Art", img:"https://img.icons8.com/?size=100&id=4922&format=png&color=FFFFFF"}, 
            {name:"Sports", img:"https://img.icons8.com/?size=100&id=2073&format=png&color=FFFFFF"}, 
            {name:"Freelancing", img:"https://img.icons8.com/?size=100&id=fF39hkEhFlir&format=png&color=FFFFFF"}, 
            {name:"Space", img:"https://img.icons8.com/?size=100&id=11389&format=png&color=FFFFFF"},
            {name:"Holiday", img:"https://img.icons8.com/?size=100&id=7501&format=png&color=FFFFFF"}
        ]
    )

    const [historys, setHistorys] = useState([
        {pic:"/src/assets/users/user1.png", name:"Gloria", content:"This is sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/user3.png", name:"Tentian", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/user2.jpg", name:"Akira", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/me.png", name:"Me", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/user4.png", name:"Rosy", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/user8.jfif", name:"John", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/me.png", name:"Me", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
        {pic:"/src/assets/users/user5.png", name:"Micky", content:"This is also sample content", date:"2024/5/7 - 03:15:32"},
    ])

    const [posts, setPosts] = useState([
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
        {title:"How to solve this problem", content:"Now I am facing this issue...Please Help me! ...", num:35, date:"2024/3/6" },
    ])
    const [selectedTopic, setSelectedTopic] = useState("");
    const [isChatShown, setIsChatShown] = useState(false);
    const [isNavbarShown, setIsNavbarShown] = useState(true);

    return (
        <MainPage>
            <div className=" w-screen flex relative" style={{height:"calc(100vh - 7.5rem)"}}>
                {
                    !isNavbarShown ? <button onClick={()=>{setIsNavbarShown(true)}} className=" bg-dark p-2 justify-center items-center text-sm rounded-md absolute top-1 left-1 z-10 flex sm:hidden">
                        <img className=" size-5" src="https://img.icons8.com/?size=100&id=37225&format=png&color=FFFFFF" alt="" />
                    </button> : <></>
                }
                {
                    isNavbarShown?<div className="h-full absolute sm:relative w-36 bg-light_dark text-white flex justify-start flex-col items-center z-30">
                        <button onClick={()=>{setIsNavbarShown(false)}} className=" p-2 justify-center items-center text-sm rounded-md absolute top-1 right-1 flex sm:hidden">
                            <img src="https://img.icons8.com/?size=100&id=8112&format=png&color=FFFFFF" className=" size-5" alt="" />
                        </button>
                        <button className=" w-3/4 h-10 bg-dark mt-10 flex justify-center items-center text-sm rounded-md sm:mt-5">
                            <img src="https://img.icons8.com/?size=100&id=114094&format=png&color=FFFFFF" className=" size-5 pr-1" alt="" />
                            Post
                        </button>
                        <div className=" w-full h-full mt-5 overflow-y-auto overflow-x-hidden">
                            {
                                topics.map(topic=><button key={topic.name} className="min-h-20 w-full box-border border-solid border-b-2 p-2 border-dark flex justify-start items-center" style={selectedTopic===topic.name?{color:"#98b912"}:{color:"white"}} onClick={()=>{setSelectedTopic(topic.name)}}>
                                    <img src={topic.img} className=" size-5 ml-1" alt="" />
                                    <p className="ml-2">{topic.name}</p>
                                </button>)
                            }   
                        </div>
                    </div> : <></>
                }
                <div className=" flex-grow h-full p-5 flex flex-wrap overflow-y-auto">
                    {
                        posts.map(post=><ForumCard func={()=>{setIsChatShown(true)}} content={post.content} title={post.title} date={post.date} num={post.num} />)
                    }
                </div>
                {
                    isChatShown? <div className=" z-40 h-full flex flex-col bg-realWhite chat-field w-full absolute right-0" style={{maxWidth:"500px"}}>
                    <div className="w-full flex-grow overflow-y-auto pb-5 flex items-center flex-col">
                            {
                                historys.map(history=><ChatItem pic={history.pic} name={history.name} content={history.content} date={history.date} />)
                            }
                        </div>
                        <div className=" bottom-0 w-full p-2 bg-realWhite">
                            <textarea name="" id="" className="resize-none p-1 w-full border-brown border-x-2 border-y-2 outline-none" rows="3"></textarea>
                            <div className=" w-full flex flex-row justify-around pl-5 pr-5">
                                <div className="w-1/6">
                                <BrownButton text={"Commit"} />
                                </div>
                                <div className=" w-1/6">
                                <BrownButton text={"Close"} func={()=>{setIsChatShown(false)}} />
                                </div>
                            </div>
                        </div>
                    </div>:<></>
                }
            </div>
        </MainPage>
    )
}

export default ForumPage