import * as React from "react"

export default function Home({currentPageNumber}){

  return(
    <>
    <section id="page-1"className={`m-0 p-0 text-center fixed top-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 
    ${currentPageNumber == 1 ? "-left-1/2" : "-right-1/2"}`
    } >
        <h1>Tristan Crain</h1>
        <p>Full-Stack Developer</p>
    </section>
    </>
  )

}