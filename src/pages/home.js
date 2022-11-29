import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({currentPageNumber}){



  function pageturn(currentPageNumber,myPageNumber){
    
    if(currentPageNumber < myPageNumber){
      return "translate-x-[4000px] fixed"
    }
    else if (currentPageNumber > myPageNumber){
      return "-translate-x-[4000px] fixed"
    }
    else {
      return "relative"
    }

  }

  return(
    <section class="flex pt-[100px] mx-[50px]">
    <section id="page-1"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"1")}`}>
    <article className="w-[1500px]  self-center">
          <div className="flex flex-col">
            <StaticImage src="../images/Tristan-Photo.jpg" height={350} class="self-center rounded-[50%] my-10" alt="Tristan Photo" />
            <StaticImage src="../images/Tristan-Signature.png" height={150} class="self-center" alt="Tristan Signature" />
            <h3 className="my-10">Full Stack Web Developer</h3>
           </div>
          </article>
    </section>
    <section id="page-2"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"2")}`}>
      <article className="w-[1500px] self-center">
        <StaticImage src="../images/About-Me.png" height={150} class="self-center my-10" alt="About Me" />
        <div id="description" className="bg-[#222222] text-white p-10 rounded-[10px] my-10">
          <p>I'm a Bilingual, Full-Stack Web Developer leveraging a Game Development background to build
fun, intuitive and innovative user experiences on the web. Earned a certificate in Full-Stack Web
Development from Carleton University. Innovative problem-solver who is passionate about
developing apps with a focus on mobile-first design and development. Strengths in creativity,
teamwork, and building projects from ideation to execution.</p>
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
    <section id="page-3"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"3")}`}>
      <article className="w-[1500px] self-center">
        <StaticImage src="../images/Projects.png" height={150} class="self-center my-10" alt="Projects" />
      </article>
    </section>
    <section id="page-4"className={`z-[2] winter flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPageNumber,"4")}`}>
      <article className="w-[1500px] self-center">
        <StaticImage src="../images/Contact-Me.png" height={150} class="self-center my-10" alt="Projects" />
      </article>
    </section>


    </section>
  )

}