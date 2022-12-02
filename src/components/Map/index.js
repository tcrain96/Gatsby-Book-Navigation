import * as React from "react"
import Layer1 from "./Layer1"
import Layer2 from "./Layer2"

export default function Map(){

    function activeLayer(currentLayer, myLayer){
        if(currentLayer === myLayer){
            return "relative opacity-100"
        }
        else if(currentLayer > myLayer){
            return"fixed -translate-y-[4000px] opacity-0"
        }
        else if(currentLayer < myLayer){
            return"fixed translate-y-[4000px] opacity-0"
        }
    }

    function pageturn(currentPage,myPageNumber){

        if(currentPage < myPageNumber){
         return "translate-x-[4000px] fixed opacity-0"
       }
        else if (currentPage > myPageNumber){
          return "-translate-x-[4000px] fixed opacity-0"
        }
        else {
          return "relative opacity-100"
        }
  }

return (
    <section class="flex flex-col z-[3]">
        
        <Layer1 activeLayer={activeLayer} pageTurn = {pageturn}/>
        <Layer2 activeLayer={activeLayer} pageTurn = {pageturn}/>
        
    </section>
)
};