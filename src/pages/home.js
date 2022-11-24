import * as React from "react"

export default function Home({currentPageNumber}){



  function pageturn(currentPageNumber,myPageNumber){
    
    if(currentPageNumber < myPageNumber){
      return "translate-x-[4000px]"
    }
    else if (currentPageNumber == myPageNumber){
      return "-translate-x-1/2"
    }
    else if (currentPageNumber > myPageNumber){
      return "-translate-x-[4000px]"
    }

  }
  return(
    <>

    <section id="page-1"className={`scrollbar-hide m-0 md:pt-[200px] pt-[50px] px-[100px] text-center fixed h-screen w-screen left-1/2 overflow-scroll duration-500 ${pageturn(currentPageNumber,"1")}`}>
        <h1>Tristan Crain</h1>
        <p>Full-Stack Developer</p>
    </section>

    <section id="page-2"className={`scrollbar-hide m-0 md:pt-[200px] pt-[50px] text-center fixed left-1/2 duration-500 ${pageturn(currentPageNumber,"2")}`}>
        <h1>Tristan Crain</h1>
        <p>Full-Stack Developer2</p>
    </section>

    <section id="page-3"className={`scrollbar-hide m-0 md:pt-[200px] pt-[50px] text-center fixed left-1/2 duration-500 ${pageturn(currentPageNumber,"3")}`}>
        <h1>Tristan Crain</h1>
        <p>Full-Stack Developer3</p>
    </section>

    </>
  )

}