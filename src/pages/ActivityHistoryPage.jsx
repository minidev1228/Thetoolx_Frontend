import React from "react";

import MainPage from "./MainPage";
import IconBrownButton from "../components/IconBrownButton";

const ActivityHistoryPage = () =>{
    const data = [
        {name: 'Video downloader', mark: 'https://img.icons8.com/?size=100&id=106753&format=png&color=14203a', time: '2024/5/3' },
        {name: 'Twitter downloader', mark: 'https://img.icons8.com/?size=100&id=8824&format=png&color=14203a', time: '2024/4/18' },
        {name: 'Video downloader', mark: 'https://img.icons8.com/?size=100&id=106753&format=png&color=14203a', time: '2024/3/25' },
        {name: 'Calculator', mark: 'https://img.icons8.com/?size=100&id=9470&format=png&color=14203a', time: '2024/3/19' },
        {name: 'Image background remover', mark: 'https://img.icons8.com/?size=100&id=53433&format=png&color=14203a', time: '2024/3/5' },
        {name: 'Calculator', mark: 'https://img.icons8.com/?size=100&id=9470&format=png&color=14203a', time: '2024/2/11' },
        {name: 'IFSC Code Finder', mark: 'https://img.icons8.com/?size=100&id=PqJ2kSnwUOWY&format=png&color=14203a', time: '2024/1/30' },
    ];
    return (
        <MainPage>
            <div className=" w-screen p-10 relative pt-16" style={{minHeight:"calc(100vh - 10rem)"}}>
                <div className=" w-16 absolute top-5 right-20">
                    <IconBrownButton func={()=>{}} icon={"https://img.icons8.com/?size=100&id=45964&format=png&color=FFFFFF"} text={"Download"} />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Mark</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Time</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                        {data.map((item, id) => (
                            <tr key={id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">{id+1}</td>
                            <td className="py-3 px-6 text-left"><img className=" size-10" src={item.mark} /></td>
                            <td className="py-3 px-6 text-left">{item.name}</td>
                            <td className="py-3 px-6 text-left">
                                {item.time}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainPage>
    )
}

export default ActivityHistoryPage