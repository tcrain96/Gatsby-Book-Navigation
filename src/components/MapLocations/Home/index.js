import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function Home({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section id="page1" className={`flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"1")}`}>
        <article className="w-[1500px]  self-center ">
            <div className="flex flex-col">
                <StaticImage src="./images/Tristan-Photo.jpg" height={350} className="self-center rounded-[50%] my-10" alt="Tristan Photo" />
                <StaticImage src="./images/Tristan-Signature.png" height={150} className="self-center" alt="Tristan Signature" />
                <h3 className="my-10 text-white">Full Stack Web Developer</h3>
            </div>
        </article>
    </section>
)
};