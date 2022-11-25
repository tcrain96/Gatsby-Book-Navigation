import * as React from "react"

export default function Home({currentPageNumber,incrementPage}){



  function pageturn(currentPageNumber,myPageNumber){
    
    if(currentPageNumber < myPageNumber){
      return "translate-x-[4000px]"
    }
    else if (currentPageNumber > myPageNumber){
      return "-translate-x-[4000px]"
    }
    else {
      return "-translate-x-1/2"
    }

  }

  return(
    <>
    
    <section id="page-1"className={`z-20 winter flex justify-center scrollbar-hide m-0 px-[100px] text-center fixed h-screen w-screen left-1/2 overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"1")}`}>
    <article className="w-[1500px] self-center">
          <div className="flex flex-col">
            <h1 className="text-gray-900">Hey, I'm Tristan Crain</h1>
            <p className="text-gray-900 my-5">A Full-Stack Web Developer leveraging a Game Development background to build fun, intuitive and innovative user experiences on the web.</p>
           </div>
          </article>
    </section>

    <section id="page-2"className={`z-20 spring flex justify-center scrollbar-hide m-0 px-[100px] text-center fixed h-screen w-screen left-1/2 overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"2")}`}>
        <article className="w-[1500px] self-center">
          <div className="flex flex-col bg-blue-400 p-10">
            <h1 className="text-gray-900">Hey, I'm Tristan Crain</h1>
            <p className="text-gray-900 my-5">A Full-Stack Web Developer leveraging a Game Development background to build fun, intuitive and innovative user experiences on the web.</p>
           <a onClick={incrementPage} className = "my-5 w-40 self-center text-white drop-shadow-effect bg-gray-900 p-5 hover:bg-blue-500 hover:-translate-y-1 hover:cursor-pointer duration-300">About Me</a>
           </div>
          </article>
    </section>

    <section id="page-3"className={`z-20 summer flex justify-center scrollbar-hide m-0 px-[100px] text-center fixed h-screen w-screen left-1/2 overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"3")}`}>
    <article className="w-[1500px] self-center">
          <div className="flex flex-col bg-blue-400 p-10">
            <h1 className="text-gray-900">Hey, I'm Tristan Crain</h1>
            <p className="text-gray-900 my-5">A Full-Stack Web Developer leveraging a Game Development background to build fun, intuitive and innovative user experiences on the web.</p>
           <a onClick={incrementPage} className = "my-5 w-40 self-center text-white drop-shadow-effect bg-gray-900 p-5 hover:bg-blue-500 hover:-translate-y-1 hover:cursor-pointer duration-300">About Me</a>
           </div>
          </article>
    </section>

    <section id="page-4"className={`z-20 fall flex justify-center scrollbar-hide m-0 px-[100px] text-center fixed h-screen w-screen left-1/2 overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"4")}`}>
        <article className="w-[1500px] self-center">
          <div className="flex flex-col bg-blue-400 p-10">
            <h1 className="text-gray-900">Hey, I'm Tristan Crain</h1>
            <p className="text-gray-900 my-5">A Full-Stack Web Developer leveraging a Game Development background to build fun, intuitive and innovative user experiences on the web.</p>
           <a onClick={incrementPage} className = "my-5 w-40 self-center text-white drop-shadow-effect bg-gray-900 p-5 hover:bg-blue-500 hover:-translate-y-1 hover:cursor-pointer duration-300">About Me</a>
           </div>
          </article>
    </section>


    </>
  )

}