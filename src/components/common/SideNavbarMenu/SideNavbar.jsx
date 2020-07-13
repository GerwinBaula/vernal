import React from "react";
import SideNavbarLabel from "./SideNavbarLabel";
import SideNavbarCheckbox from "./SideNavbarCheckbox";

function SideNavbar({ listItems, checked, onCheckedChange, onThemeChange }) {
  return (
    <nav>
      <SideNavbarCheckbox checked={checked} onCheckedChange={onCheckedChange} />
      <SideNavbarLabel
        checked={checked}
        listItems={listItems}
        onCheckedChange={onCheckedChange}
        onThemeChange={onThemeChange}
      />
    </nav>
  );
}

export default SideNavbar;
