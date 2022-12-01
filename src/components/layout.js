import * as React from "react";
import SocialNav from "./socialNav";
import MapNav from "./mapNav";
import Map from "./map";
import SeasonalBackgrounds from "./seasonalBackgrounds";
import { useSelector } from "react-redux";

export default function Layout() {

  const currentPage = useSelector((state)=>state.counter.value);

  function changeSeason(){
    switch(currentPage){
      case 1:
        return "winter";
      case 2:
        return "spring";
      case 3:
        return "summer";
      case 4:
        return "fall";
      default:
        return "winter";
  }
  }

  return (
    <>
      <SeasonalBackgrounds/>
      <Map/>
      <SocialNav changeSeason={changeSeason}/>
      <MapNav changeSeason={changeSeason}/>
    </>
  );
}
