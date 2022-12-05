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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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