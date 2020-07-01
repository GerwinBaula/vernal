import React from "react";
import HamburgerLabel from "./HamburgerLabel";
import HamburgerCheckbox from "./HamburgerCheckbox";

function Hamburger({ checked, onCheckedChange }) {
  return (
    <>
      <HamburgerCheckbox checked={checked} onCheckedChange={onCheckedChange} />
      <HamburgerLabel onCheckedChange={onCheckedChange} />
    </>
  );
}

export default Hamburger;
