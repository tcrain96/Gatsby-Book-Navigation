import * as React from "react"
import Home from "./destinations/home"
import About from "./destinations/about"
import Projects from "./destinations/projects"
import Contact from "./destinations/contact"

export default function Map(){

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
    <section class="flex pt-[100px] mx-[50px]">
        <Home pageturn={pageturn}/>
        <About pageturn={pageturn}/>
        <Projects pageturn={pageturn}/>
        <Contact pageturn={pageturn}/>
    </section>
)
};