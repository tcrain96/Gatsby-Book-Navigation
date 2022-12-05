import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function TheMet({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"8")}`}>
        <article className="w-[1500px] self-center flex flex-col">
            
            <StaticImage src="./images/The-Met-Home.jpg" quality={100} className="self-center mt-10 rounded-[10px]" />  

            <StaticImage src="./images/The-Met-Nav.jpg" quality={100} className="self-center mt-10 rounded-[10px]" />  

            <StaticImage src="./images/The-Met-Page.jpg" quality={100} className="self-center mt-10 rounded-[10px]" /> 
            
            <div className="intro-section text-center mt-10 p-10 py-20 bg-[#222222] text-white rounded-[10px]">
                <h2 className="font-bold">Overview</h2>
                <p>The Met, otherwise known as The Metropolitan Bible Church, is one of the largest Churches in Ottawa and services more then 1200 people per week. The project involved a complete redesign and development of a brand new website. The website was built using Squarespace. HTML and CSS are the primary languages used to build the website, whilst Javascript was used to implement creating elements on the fly.</p>
            </div>

            <div className="tools-section bg-[#222222] mt-10 p-10 py-20 rounded-[10px]">
                <h2 className="text-white font-bold">Skills</h2>
            <div className="flex md:flex-row flex-col justify-center text-white">
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">HTML</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">CSS</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Javascript</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Squarespace</li>
                    </ul>
                </div>
            </div>  

        </article>
    </section>
)
};