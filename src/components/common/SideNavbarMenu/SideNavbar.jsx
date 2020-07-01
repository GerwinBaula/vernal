import React from "react";
import SideNavbarLabel from "./SideNavbarLabel";
import SideNavbarCheckbox from "./SideNavbarCheckbox";

function SideNavbar({ listItems, checked, onCheckedChange, dispatch }) {
  return (
    <nav>
      <SideNavbarCheckbox checked={checked} onCheckedChange={onCheckedChange} />
      <SideNavbarLabel
        listItems={listItems}
        onCheckedChange={onCheckedChange}
        dispatch={dispatch}
      />
    </nav>
  );
}

export default SideNavbar;
