import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faArrowLeft, faArrowRight } from'@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Layout({incrementPage,decrementPage,currentPageNumber}) {

  function rightButtonDisplayFormat(currentPageNumber){
    if(currentPageNumber === 4){
      return "hidden";
    }
    else if(currentPageNumber === 1){
      return "block animate-bounce"
    }
    else{
      return "block"
    }

  }
  function leftButtonDisplayFormat(currentPageNumber){
    if(currentPageNumber === 1){
      return "hidden";
    }
    else{
      return "block"
    }
  }


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
      
      <nav id="social-nav" className = {`md:flex hidden flex-col fixed bottom-10 text-white z-50 text-left ${changeSeason()}`}>
        <a href="https://www.facebook.com/tristan.crain.9" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faFacebook} className = "py-5 fa-xl" /></a>
        <a href="https://github.com/tcrain96" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faGithub} className = "py-5 fa-xl" /></a>
        <a href="https://www.linkedin.com/in/tristancrain/" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faLinkedin} className = "py-5 fa-xl" /></a>
      </nav>

      <nav id="pages-nav" className={`flex justify-end fixed bottom-10 md:right-10 right-1/2 md:translate-x-0 translate-x-1/2 text-white z-50 ${changeSeason()}`}>
        <a onClick={decrementPage} className = {` p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 mr-5 ${leftButtonDisplayFormat(currentPageNumber)}`}><FontAwesomeIcon icon={faArrowLeft} className = "fa-xl"/></a>
        <a onClick={incrementPage} className = {` p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 ${rightButtonDisplayFormat(currentPageNumber)}`}><FontAwesomeIcon icon={faArrowRight} className = "fa-xl"/></a>
      </nav>

      <article className={`winter-background-overlay z-[1] w-screen h-screen fixed top-0 left-0 ${currentPageNumber === 1 ? "opacity-80" : "opacity-0"}`}></article>
      <article className={`winter-background z-0 bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 1 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`spring-background z-0 bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 2 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`summer-background z-0 bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 3 ? "opacity-100" : "opacity-0"}`}></article>
      <article className={`fall-background z-0 bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPageNumber === 4 ? "opacity-100" : "opacity-0"}`}></article>

    </section>
  );
}
