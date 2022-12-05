import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useDispatch, useSelector } from "react-redux";
import { setActiveLayer } from "../../../features/ActiveLayer/activeLayerSlice";
import { setPageNumber } from "../../../features/PageNumber/pageNumberSlice";

export default function Projects({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);
    const dispatch = useDispatch();

return (
    <section id="page3"className={`flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"3")}`}>
        <article className="w-[1200px] self-center">
            <StaticImage src="./images/Projects.png" height={150} class="self-center my-10" alt="Projects" />
            
            <div id="projects-grid" className="flex flex-col">
                
                <div id="portfolio" className="border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-2 hover:cursor-pointer duration-200 text-white mb-3" onClick={() => {dispatch(setActiveLayer(2)); dispatch(setPageNumber(5));}}>
                    <h2>Portfolio</h2>
                    <p>Web Development | NodeJS</p>
                </div>  

                <div id="puppy-pals" className="border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-2 hover:cursor-pointer duration-200 text-white mb-3" onClick={() => {dispatch(setActiveLayer(2)); dispatch(setPageNumber(6));}}>
                    <h2>PuppyPals</h2>
                    <p>Web Development | NodeJS</p>
                </div>  

                <div id="encounter-the-truth" className="border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-2 hover:cursor-pointer duration-200 text-white mb-3" onClick={() => {dispatch(setActiveLayer(2)); dispatch(setPageNumber(7));}}>
                    <h2>Encounter the Truth</h2>
                    <p>Web Development | Javascript</p>
                </div>
                
                <div id="the-met" className="border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-2 hover:cursor-pointer duration-200 text-white mb-3" onClick={() => {dispatch(setActiveLayer(2)); dispatch(setPageNumber(8));}}>
                    <h2>The Met</h2>
                    <p>Web Development | Javascript</p>
                </div>  

                <div id="carpediem" className="border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-2 hover:cursor-pointer duration-200 text-white mb-3" onClick={() => {dispatch(setActiveLayer(2)); dispatch(setPageNumber(9));}}>
                    <h2>Carpediem</h2>
                    <p>Web Development | .NET Core</p>
                </div>  
            
            </div>
            
        </article>
    </section>
)
};