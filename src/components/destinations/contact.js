import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function Contact({pageturn}){
    const currentPage = useSelector((state)=>state.counter.value);
return (
    <section id="page-4"className={`z-20 winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"4")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="../../images/Contact-Me.png" height={150} class="self-center my-10" alt="Projects" />
        </article>
    </section>
)
};