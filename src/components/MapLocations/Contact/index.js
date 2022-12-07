import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSelector } from "react-redux";

export default function Contact({pageturn}){
    const currentPage = useSelector((state)=>state.pageNumber.value);
return (
    <section id="page4"className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"4")}`}>
        <article className="w-[1200px] self-center">
            <StaticImage src="./images/Contact-Me.png" height={150} class="self-center my-10" alt="Projects" />
            
            <form action="https://getform.io/f/d6ad2ff9-b029-4ec4-9390-48aff9f5f4dc" method="POST" className="flex flex-col bg-[#222222] text-white rounded-[20px] py-[50px]">
                
                <article className="self-center flex w-[75%] flex-wrap">
                     <div className="flex flex-col my-5 md:mr-5 self-center w-screen">
                        <label className="font-bold text-[25px]">Full Name:</label>
                        <input className="h-[25px] p-5 text-[#222222] text-[20px]" type="text" name="name"/>
                    </div>

                     <div className="flex flex-col my-5 md:ml-5 self-center w-screen">
                        <label className="font-bold text-[25px]">Email:</label>
                        <input className="h-[25px] p-5 text-[#222222] text-[20px]" type="email" name="email"/>
                     </div>
                </article>

                <div className="flex flex-col my-5 self-center w-[75%]">
                        <label className="font-bold text-[25px]">Subject:</label>
                        <input className="h-[25px] p-5 text-[#222222] text-[20px]" type="text" name="subject"/>
                </div>
                
                
                <div className="flex flex-col m-5 self-center w-[75%]">
                    <label className="font-bold text-[25px]">Message:</label>
                    <textarea className="p-5 text-[#222222] text-[20px]" rows={5} type="text" name="message"/>
                </div>
                

                <button className="font-bold text-[25px] border-[5px] bg-[#222222] p-5 hover:bg-blue-500 hover:-translate-y-1 hover:cursor-pointer duration-200 self-center" type="submit">Send</button>
            </form>

        </article>
    </section>
)
};