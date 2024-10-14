import React , {useState} from "react";

import MainPage from "./MainPage";
import ToolCard from "../components/ToolCard";

const SavedToolPage = () =>{
    const [tools, setTools] = useState([
        {img:"https://img.icons8.com/?size=100&id=106753&format=png&color=14203a", title:"Video downloader", isNew:true, num:5764},
        {img:"https://img.icons8.com/?size=100&id=GIWBO7Csvsvc&format=png&color=14203a", title:"Youtube to MP3", isNew:false, num:675},
        {img:"https://img.icons8.com/?size=100&id=9470&format=png&color=14203a", title:"Calculator", isNew:false, num:675},
    ])

    return (
        <MainPage>
            <div className=" w-full pl-10 pt-10 pr-10 mt-10"  style={{minHeight:"calc(100vh - 10rem)"}}>
                <div className="w-full flex flex-wrap mt-10 justify-center">
                    {
                        tools.map((tool, id)=><ToolCard key={id} img={tool.img} title={tool.title} num={tool.num} isNew={tool.isNew} />)
                    }
                </div>
            </div>
        </MainPage>
        )
}

export default SavedToolPage