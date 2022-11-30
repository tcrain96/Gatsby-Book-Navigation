import * as React from "react"
import Layout from "../components/layout"
import Book from "./book"
import { useState } from "react"

export default function App(){

  const[currentPage,setCurrentPage] = useState(1);

  function handleNextPage(){
    setCurrentPage(currentPage + 1);
  }

  function handlePreviousPage(){
    setCurrentPage(currentPage - 1);
  }


  return(
    <main>
      <Layout incrementPage = {handleNextPage} decrementPage = {handlePreviousPage} currentPageNumber={currentPage}/>
      <Book currentPageNumber={currentPage} incrementPage = {handleNextPage}/>
    </main>
  )

}