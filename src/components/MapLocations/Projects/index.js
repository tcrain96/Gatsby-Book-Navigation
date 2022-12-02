import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useDispatch, useSelector } from "react-redux";
import { setActiveLayer } from "../../../features/ActiveLayer/activeLayerSlice";
import { setPageNumber } from "../../../features/PageNumber/pageNumberSlice";

export default function Projects({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);
    const dispatch = useDispatch();

return (
    <section id="page3"className={`flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"3")}`}>
        <article className="w-[1500px] self-center">
            <StaticImage src="../../../images/Projects.png" height={150} class="self-center my-10" alt="Projects" />
            <div id="projects-grid">

                <article id="encounter-the-truth" onClick={() => {
                    dispatch(setActiveLayer(2));
                    dispatch(setPageNumber(5));
                }}>
                    <p>Encounter The Truth</p>
                </article>

            </div>
        </article>
    </section>
)
};