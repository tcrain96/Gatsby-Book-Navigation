import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHandshake,
  faFolder,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <section className="flex">
      <header className="flex fixed">

        <article
          className={`text-center flex ease-in-out duration-300 hover:cursor-pointer hover:bg-sky-500 h-screen p-10  ${
            showSidebar ? "bg-slate-200" : "bg-sky-500"
          }`}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`align-self-center h-full w-5 ease-in-out duration-300 ${
              showSidebar ? "rotate-0" : "rotate-180"
            }`}
          />
        </article>

        <nav
          className={`ease-in-out duration-300 flex flex-col justify-center content-center text-center ${
            showSidebar
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          <Link
            to="/about"
            className="ease-in-out duration-300 bg-slate-200 font-bold text-lg hover:bg-sky-500 p-10"
          >
            <FontAwesomeIcon icon={faHandshake} className="h-6" />
            <p>About Me</p>
          </Link>

          <Link
            to="/projects"
            className="ease-in-out duration-300 bg-slate-200 font-bold text-lg hover:bg-sky-500 p-10"
          >
            <FontAwesomeIcon icon={faFolder} className="h-6" />
            <p>Projects</p>
          </Link>

          <Link
            to="/skills"
            className="ease-in-out duration-300 bg-slate-200 font-bold text-lg hover:bg-sky-500 p-10"
          >
            <FontAwesomeIcon icon={faCode} className="h-6" />
            <p>Skills</p>
          </Link>

          <Link
            to="/contact"
            className="ease-in-out duration-300 bg-slate-200 font-bold text-lg hover:bg-sky-500 p-10"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-6" />
            <p>Contact</p>
          </Link>

        </nav>

      </header>
      
      <article className="ml-96">
      {children}
      </article>
      
    </section>
  );
}
