import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Contact({currentPageNumber, pageturn}){
return (
    <section id="page-4"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"4")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="../images/Contact-Me.png" height={150} class="self-center my-10" alt="Projects" />
        </article>
    </section>
)
};