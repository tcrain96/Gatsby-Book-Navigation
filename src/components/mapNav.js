import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{ faArrowLeft, faArrowRight } from'@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import {decrement,increment} from "../features/counter/counterSlice"

export default function MapNav({changeSeason}){

  const currentPage = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

    function rightButtonDisplayFormat(currentPageNumber){
        if(currentPageNumber === 4){
          return "hidden";
        }
        else if(currentPageNumber === 1){
          return "block animate-bounce"
        }
        else{
          return "block"
        }
    
      }
    function leftButtonDisplayFormat(currentPageNumber){
        if(currentPageNumber === 1){
          return "hidden";
        }
        else{
          return "block"
        }
      }

return (
    <nav id="pages-nav" className={`flex justify-end fixed bottom-10 md:right-10 right-1/2 md:translate-x-0 translate-x-1/2 text-white z-50 ${changeSeason()}`}>
        <a onClick={() => dispatch(decrement())} className = {` p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 mr-5 ${leftButtonDisplayFormat(currentPage)}`}><FontAwesomeIcon icon={faArrowLeft} className = "fa-xl"/></a>
        <a onClick={() => dispatch(increment())} className = {` p-5 hover:bg-blue-500 hover:pr-8 hover:cursor-pointer duration-200 ${rightButtonDisplayFormat(currentPage)}`}><FontAwesomeIcon icon={faArrowRight} className = "fa-xl"/></a>
    </nav>
)
};