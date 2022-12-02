import * as React from "react"
import Home from "../../MapLocations/Home"
import About from "../../MapLocations/About"
import Projects from "../../MapLocations/Projects"
import Contact from "../../MapLocations/Contact"
import { useSelector } from "react-redux"
export default function Layer1({activeLayer}){


  const currentLayer = useSelector((state)=>state.activeLayer.value);

  function pageturn(currentPage,myPageNumber){

        if(currentPage < myPageNumber){
         return "translate-x-[4000px] fixed"
       }
        else if (currentPage > myPageNumber){
          return "-translate-x-[4000px] fixed"
        }
        else {
          return "relative"
        }
  }

return (
    <section className={`z-[3] flex pt-[100px] mx-[50px] duration-500 ${activeLayer(currentLayer,1)}`}>

        <Home pageturn={pageturn}/>
        <About pageturn={pageturn}/>
        <Projects pageturn={pageturn}/>
        <Contact pageturn={pageturn}/>
        
    </section>
)
};