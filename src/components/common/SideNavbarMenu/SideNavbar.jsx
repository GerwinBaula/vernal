import React from "react";
import SideNavbarLabel from "./SideNavbarLabel";
import SideNavbarCheckbox from "./SideNavbarCheckbox";

function SideNavbar({ listItems, checked, onCheckedChange, onToggleChange }) {
  return (
    <nav>
      <SideNavbarCheckbox checked={checked} onCheckedChange={onCheckedChange} />
      <SideNavbarLabel
        checked={checked}
        listItems={listItems}
        onCheckedChange={onCheckedChange}
        onToggleChange={onToggleChange}
      />
    </nav>
  );
}

export default SideNavbar;
