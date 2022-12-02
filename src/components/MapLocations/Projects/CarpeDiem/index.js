import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function CarpeDiem({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"5")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="../../../images/Projects.png" height={150} class="self-center my-10" alt="Projects" />
        </article>
    </section>
)
};