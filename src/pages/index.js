import * as React from "react"
import Layout from "../components/layout"
import { useSelector } from "react-redux";

export default function App(){
  const currentPage = useSelector((state)=>state.counter.value);
  return(
    <main>
      <Layout/>
    </main>
  )

}