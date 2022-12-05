import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function Contact({pageturn}){
    const currentPage = useSelector((state)=>state.pageNumber.value);
return (
    <section id="page4"className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"4")}`}>
        <article className="w-[1200px] self-center">
            <StaticImage src="./images/Contact-Me.png" height={150} class="self-center my-10" alt="Projects" />
            
            <form action="https://getform.io/f/d6ad2ff9-b029-4ec4-9390-48aff9f5f4dc" method="POST" className="flex flex-col bg-[#222222] text-white rounded-[20px]">
                
                <article className="self-center flex w-[500px]">
                     <div className="flex flex-col my-5 mr-5 self-center w-screen">
                        <label>Name:</label>
                        <input type="text" name="name"/>
                    </div>

                     <div className="flex flex-col my-5 ml-5 self-center w-screen">
                        <label>Email:</label>
                        <input type="email" name="email"/>
                     </div>
                </article>
                
                
                <div className="flex flex-col m-5 self-center w-[500px]">
                    <label>Message:</label>
                    <textarea rows={8} type="text" name="message"/>
                </div>
                

                <button className="m-5 self-center" type="submit">Send</button>
            </form>

        </article>
    </section>
)
};