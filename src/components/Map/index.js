import * as React from "react"
import Layer1 from "./Layer1"
import Layer2 from "./Layer2"

export default function Map(){

    function activeLayer(currentLayer, myLayer){
        if(currentLayer === myLayer){
            return "relative"
        }
        else if(currentLayer > myLayer){
            return"fixed -translate-y-[4000px]"
        }
        else if(currentLayer < myLayer){
            return"fixed translate-y-[4000px]"
        }
    }

return (
    <section class="flex flex-col z-[3]">
        
        <Layer1 activeLayer={activeLayer}/>
        <Layer2 activeLayer={activeLayer}/>
        
    </section>
)
};