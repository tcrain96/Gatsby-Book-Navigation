import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function About({pageturn}){
    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section id="page2"className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"2")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="./images/About-Me.png" height={150} class="self-center my-10" alt="About Me" />
            <div id="description" className="bg-[#222222] text-white p-10 rounded-[10px] my-10">
                <p>I'm a Bilingual, Full-Stack Web Developer leveraging a Game Development background to build fun, intuitive and innovative user experiences on the web. Earned a certificate in Full-Stack Web Development from Carleton University. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.</p>
            </div>
            <div id="font-end-skills" className="bg-[#222222] text-white p-10 rounded-[10px] my-10 ">
                <h2 className="text-[40px] font-bold">Front-End Skills</h2>
                <div className="flex md:flex-row flex-col justify-center">
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">JavaScript</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">HTML</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">CSS</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">C#</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">.NET Core</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Bootstrap</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">React</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Redux</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Gatsby</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">GitHub</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Git</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">VSCode</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Squarespace</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Wordpress</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Heroku</li>
                    </ul>
                </div>
            </div>
            <div id="back-end-skills" className="bg-[#222222] text-white p-10 rounded-[10px] my-10 ">
                <h2 className="text-[40px] font-bold">Back-End Skills</h2>
                <div className="flex md:flex-row flex-col justify-center">
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">NodeJS</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Express</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">MongoDB</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">SQL</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Sequelize</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Mongoose</li>
                    </ul>
                    <ul>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">LINQ</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">GraphQL</li>
                        <li className="bg-gray-700 p-5 m-5 text-[25px] hover:-translate-y-1 duration-300 rounded-[10px]">Atlas</li>
                    </ul>
                </div>
            </div>
        </article>
    </section>
)
};