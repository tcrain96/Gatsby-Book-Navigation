import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faArrowLeft, faArrowRight } from'@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Layout({incrementPage,decrementPage,currentPageNumber,currentSeason,setCurrentSeason}) {
  

  function changeSeason(){
    switch(currentPageNumber){
      case 1:
        return "winter";
      case 2:
        return "spring";
      case 3:
        return "summer";
      case 4:
        return "fall";
      default:
        return "winter";
  }
  }

  return (
    
    <section>
      
      <nav id="social-nav" className = {`flex flex-col fixed bottom-10 text-white z-30 text-left ${changeSeason()}`}>
        <a href="https://www.facebook.com/tristan.crain.9" className="drop-shadow-effect bg-gray-900 hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faFacebook} className = "py-5 fa-xl" /></a>
        <a href="https://github.com/tcrain96" className="drop-shadow-effect bg-gray-900 hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faGithub} className = "py-5 fa-xl" /></a>
        <a href="https://www.linkedin.com/in/tristancrain/" className="drop-shadow-effect bg-gray-900 hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faLinkedin} className = "py-5 fa-xl" /></a>
      </nav>

      <nav id="pages-nav" className={`flex justify-end fixed bottom-10 right-10 w-screen text-white z-30 ${changeSeason()}`}>
        <a onClick={decrementPage} className = {`drop-shadow-effect bg-gray-900 p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 mr-5 ${currentPageNumber === 1 ? "hidden" : "block"}`}><FontAwesomeIcon icon={faArrowLeft} className = "fa-xl"/></a>
        <a onClick={incrementPage} className = {`animate-bounce drop-shadow-effect bg-gray-900 p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 ${currentPageNumber === 4 ? "hidden" : "block"}`}><FontAwesomeIcon icon={faArrowRight} className = "fa-xl"/></a>
      </nav>

      <article className={`winter-background-overlay z-10 w-screen h-screen fixed top-0 left-0 ${currentPageNumber === 1 ? "opacity-80" : "opacity-0"}`}></article>
      <article className={`winter-background z-0 w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 1 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`spring-background z-0 w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 2 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`summer-background z-0 w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 3 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`fall-background z-0 w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 4 ? "opacity-100" : "opacity-0"}`}></article>

    </section>
  );
}
