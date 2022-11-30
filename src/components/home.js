import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({currentPageNumber, pageturn}){
return (
    <section id="page-1"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"1")}`}>
        <article className="w-[1500px]  self-center">
            <div className="flex flex-col">
                <StaticImage src="../images/Tristan-Photo.jpg" height={350} class="self-center rounded-[50%] my-10" alt="Tristan Photo" />
                <StaticImage src="../images/Tristan-Signature.png" height={150} class="self-center" alt="Tristan Signature" />
                <h3 className="my-10">Full Stack Web Developer</h3>
            </div>
        </article>
    </section>
)
};