import * as React from "react"
import Layout from "../components/layout"
import Home from "../pages/home"
import { useState } from "react"

export default function App(){

  const[currentPage,setCurrentPage] = useState(0)

  function handleNextPage(){
    setCurrentPage(currentPage + 1);
  }
  function handlePreviousPage(){
    setCurrentPage(currentPage - 1);
  }

  return(
    <main>
      <Layout incrementPage = {handleNextPage} decrementPage = {handlePreviousPage}/>
      <Home currentPageNumber={currentPage}/>
    </main>
  )

}