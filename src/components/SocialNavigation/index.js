import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialNavigation(){
return (
    <nav id="social-nav" className = {`md:flex hidden flex-col fixed bottom-10 text-white text-left z-10`}>
        <a href="https://www.facebook.com/tristan.crain.9" className="border-y-[5px] border-r-[5px] bg-[#222222] hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faFacebook} className = "py-5 fa-xl" /></a>
        <a href="https://github.com/tcrain96" className="border-y-[5px] border-r-[5px] bg-[#222222] hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faGithub} className = "py-5 fa-xl" /></a>
        <a href="https://www.linkedin.com/in/tristancrain/" className="border-y-[5px] border-r-[5px] bg-[#222222] hover:bg-blue-500 pl-2 my-2 w-14 hover:w-20 duration-300"><FontAwesomeIcon icon={faLinkedin} className = "py-5 fa-xl" /></a>
      </nav>
)
};