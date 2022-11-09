import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faHome, } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
    
    const [showSidebar, setShowSidebar] = useState(true);
  
    return (
    <section>
    
      <header className="flex flex-col justify-center content-center text-center">
        

          <Link to="/"><FontAwesomeIcon icon={faHome} className="h-8 ease-in-out duration-300 hover:cursor-pointer hover:bg-sky-500 mt-5 py-5 w-1/2 mx-auto" /></Link>

        
        <article id="dropdown-icon" className={`ease-in-out duration-300 hover:cursor-pointer hover:bg-sky-500 mt-5 p-5 w-1/2 mx-auto ${showSidebar ? "bg-slate-200" : "bg-sky-500"}`} onClick={() => setShowSidebar(!showSidebar)}>
          <FontAwesomeIcon icon={showSidebar?faBars:faX} className={`h-8 ease-in-out duration-300 ${showSidebar ? "rotate-0":"rotate-180"}`}  />
        </article>
        
        <nav className={`w-1/2 mx-auto ease-in-out duration-300 flex justify-between content-center  ${showSidebar ? "translate-y-0 opacity-0 pointer-events-none" : "translate-y-4 opacity-100 pointer-events-auto"}`}>
          <Link to="/about"  className="hover:bg-sky-500 ease-in-out duration-300 bg-slate-200 p-5 w-full mr-5 font-bold text-lg">About Me</Link>
          <Link to="/projects" className="hover:bg-sky-500 ease-in-out duration-300 bg-slate-200 p-5 w-full mr-5 font-bold text-lg">Projects</Link>
          <Link to="/skills" className="hover:bg-sky-500 ease-in-out duration-300 bg-slate-200 p-5 w-full mr-5 font-bold text-lg">Skills</Link>
          <Link to="/contact" className="hover:bg-sky-500 ease-in-out duration-300 bg-slate-200 p-5 w-full font-bold text-lg">Contact</Link>
        </nav>
      </header>

      {children}

    </section>
  );
}
