import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function CarpeDiem({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"9")}`}>
        <article className="w-[1500px] self-center flex flex-col">
            
            <StaticImage src="./images/Carpediem-Home.jpg" quality={100} className="self-center mt-10 rounded-[10px]" />  

            
            <div className="intro-section text-center mt-10 p-10 py-20 bg-[#222222] text-white rounded-[10px]">
                <h2 className="font-bold">Overview</h2>
                <p>Carpediem is a photography company that works with schools across a variety of cities around Ontario. I joined the team to help transfer their original website, which was built using .NET Web Forms, to the newer .NET Core. The project required me to rebuild their entire office website and public website to accomodate the newer .NET Core whilst hooking up their older SQL database. I used tools like Linq, Ajax and C# to make it happen!</p>
            </div>

            <div className="tools-section bg-[#222222] mt-10 p-10 py-20 rounded-[10px]">
                <h2 className="text-white font-bold">Skills</h2>
            <div className="flex md:flex-row flex-col justify-center text-white">
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">HTML</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">CSS</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">JavaScript</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">.NET Core</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">C#</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">SQL</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Azure Devops</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Linq</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Ajax</li>
                    </ul>
                </div>
            </div>  

        </article>
    </section>
)
};