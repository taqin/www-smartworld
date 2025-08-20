import React from "react";
import NavigationItem from "./NavigationItem";
import { TRAVEL_AGENCY_NAVIGATION } from "@/data/travel-agency-navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {TRAVEL_AGENCY_NAVIGATION.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
