import * as React from "react"
import Portfolio from "../../MapLocations/Projects/GatsbyPortfolio"
import PuppyPals from "../../MapLocations/Projects/PuppyPals"
import EncounterTheTruth from "../../MapLocations/Projects/EncounterTheTruth"
import TheMet from "../../MapLocations/Projects/TheMet"
import CarpeDiem from "../../MapLocations/Projects/CarpeDiem"
import { useSelector } from "react-redux"
export default function Layer2({activeLayer, pageTurn}){

  const currentLayer = useSelector((state)=>state.activeLayer.value);

return (
    <section className={`z-[3] flex py-[100px] mx-[50px] duration-500 ${activeLayer(currentLayer,2)}`}>
        
        <Portfolio pageturn={pageTurn}/>
        <PuppyPals pageturn={pageTurn}/>
        <EncounterTheTruth pageturn={pageTurn}/>
        <TheMet pageturn={pageTurn}/>
        <CarpeDiem pageturn={pageTurn}/>
        
    </section>
)
};