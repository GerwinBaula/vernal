import React from "react";
import HamburgerLabel from "./HamburgerLabel";
import HamburgerCheckbox from "./HamburgerCheckbox";

function Hamburger({
  checked,
  firstSetOfLinks,
  secondSetOfLinks,
  onCheckedChange,
}) {
  return (
    <>
      <HamburgerCheckbox checked={checked} onCheckedChange={onCheckedChange} />
      <HamburgerLabel
        checked={checked}
        firstSetOfLinks={firstSetOfLinks}
        secondSetOfLinks={secondSetOfLinks}
        onCheckedChange={onCheckedChange}
      />
    </>
  );
}

export default Hamburger;
