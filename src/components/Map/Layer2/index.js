import * as React from "react"
import EncounterTheTruth from "../../MapLocations/Projects/EncounterTheTruth"
import { useSelector } from "react-redux"
export default function Layer2({activeLayer, pageTurn}){

  const currentLayer = useSelector((state)=>state.activeLayer.value);

return (
    <section className={`z-[3] flex py-[100px] mx-[50px] duration-500 ${activeLayer(currentLayer,2)}`}>

        <EncounterTheTruth pageturn={pageTurn}/>
        
    </section>
)
};