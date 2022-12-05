import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function EncounterTheTruth({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"7")}`}>
        <article className="w-[1500px] self-center flex flex-col">
            
            <StaticImage src="./images/Encounter-The-Truth-Home.jpg" quality={100} className="self-center mt-10 rounded-[10px]" />  

            <StaticImage src="./images/Encounter-The-Truth-Nav.jpg" quality={100} className="self-center mt-10 rounded-[10px]" />  
            
            <div className="intro-section text-center mt-10 p-10 py-20 bg-[#222222] text-white rounded-[10px]">
                <h2 className="font-bold">Overview</h2>
                <p>Encounter the Truth is a radio broadcast that gets broadcasted daily across Canada and the US. I joined the project from the start, and built their first website many years ago. Recently, after graduating from school, I revisited their website and rebuilt the entire thing using Squarespace and basic HTML, CSS and Javascript. The intention was to simplify the website, and to make it accessible and clean for the users visiting it.</p>
            </div>

            <div className="tools-section bg-[#222222] mt-10 p-10 py-20 rounded-[10px]">
                <h2 className="text-white font-bold">Skills</h2>
            <div className="flex md:flex-row flex-col justify-center text-white">
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Squarespace</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">CSS</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">HTML</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">JavaScript</li>
                    </ul>
                </div>
            </div>  

        </article>
    </section>
)
};