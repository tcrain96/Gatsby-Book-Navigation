import * as React from "react";
import SocialNav from "../SocialNavigation";
import MapNav from "../ArrowNavigation";
import Map from "../Map";
import SeasonalBackgrounds from "../SeasonalBackgrounds";

export default function Layout() {
  return (
    <>
      <SeasonalBackgrounds/>
      <Map/>
      <SocialNav/>
      <MapNav/>
    </>
  );
}
