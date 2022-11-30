import * as React from "react"
import Home from "../components/home"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

export default function Book({currentPageNumber}){

  function pageturn(currentPageNumber,myPageNumber){
    
    if(currentPageNumber < myPageNumber){
      return "translate-x-[4000px] fixed"
    }
    else if (currentPageNumber > myPageNumber){
      return "-translate-x-[4000px] fixed"
    }
    else {
      return "relative"
    }

  }

  return(
    <section class="flex pt-[100px] mx-[50px]">
      <Home currentPageNumber={currentPageNumber} pageturn={pageturn}/>
      <About currentPageNumber={currentPageNumber} pageturn={pageturn}/>
      <Projects currentPageNumber={currentPageNumber} pageturn={pageturn}/>
      <Contact currentPageNumber={currentPageNumber} pageturn={pageturn}/>
    </section>
  )

}