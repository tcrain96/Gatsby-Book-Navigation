import * as React from "react"
import { useSelector } from "react-redux";
import "./index.css"

export default function SeasonalBackgrounds(){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <>
        <article className={`winter-background-overlay z-[1] w-screen h-screen fixed top-0 left-0 ${currentPage === 1 ? "opacity-80" : "opacity-0"}`}></article>
        <article className={`winter-background z-[0] bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPage === 1 ? "opacity-100" : "opacity-0"}`}></article>
        <article className={`spring-background z-[0] bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPage === 2  ? "opacity-100" : "opacity-0"}`}></article>
        <article className={`summer-background z-[0] bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${(currentPage === 3 || currentPage > 4) ? "opacity-100" : "opacity-0"}`}></article>
        <article className={`fall-background z-[0] bg-center w-screen h-screen fixed top-0 left-0 duration-500 ${currentPage === 4 ? "opacity-100" : "opacity-0"}`}></article>
    </>
)
};