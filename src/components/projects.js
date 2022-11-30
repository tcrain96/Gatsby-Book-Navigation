import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Projects({currentPageNumber, pageturn}){
return (
    <section id="page-3"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"3")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="../images/Projects.png" height={150} class="self-center my-10" alt="Projects" />
        </article>
    </section>
)
};