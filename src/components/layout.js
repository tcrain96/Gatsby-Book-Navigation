import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faArrowLeft, faArrowRight } from'@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Layout({incrementPage,decrementPage}) {
  return (
    <section>
      <nav id="social-nav" className = "flex flex-col fixed bottom-10 text-white z-10 text-left ">
        <a href="https://www.facebook.com/tristan.crain.9" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300 border-t-[3px] border-r-[3px] border-b-[3px]"><FontAwesomeIcon icon={faFacebook} className = "py-5 fa-xl" /></a>
        <a href="https://github.com/tcrain96" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300 border-t-[3px] border-r-[3px] border-b-[3px]"><FontAwesomeIcon icon={faGithub} className = "py-5 fa-xl" /></a>
        <a href="https://www.linkedin.com/in/tristancrain/" className="hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300 border-t-[3px] border-r-[3px] border-b-[3px]"><FontAwesomeIcon icon={faLinkedin} className = "py-5 fa-xl" /></a>
      </nav>

      <nav id="pages-nav" class="flex justify-end fixed bottom-10 right-10 w-screen text-white">
        <a onClick={incrementPage} className = "p-5 hover:bg-blue-500 hover:pr-8 duration-200 mr-5 border-[3px]"><FontAwesomeIcon icon={faArrowLeft} className = "fa-xl" /></a>
        <a onClick={decrementPage} className = "p-5 hover:bg-blue-500 hover:pr-8 duration-200 border-[3px]"><FontAwesomeIcon icon={faArrowRight} className = "fa-xl" /></a>
      </nav>
    </section>
  );
}
