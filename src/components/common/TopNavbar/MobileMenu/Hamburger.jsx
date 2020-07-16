import React from "react";
import HamburgerLabel from "./HamburgerLabel";
import HamburgerCheckbox from "./HamburgerCheckbox";

function Hamburger(props) {
  return (
    <>
      <HamburgerCheckbox
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
      />
      <HamburgerLabel
        checked={props.checked}
        firstSetOfLinks={props.firstSetOfLinks}
        secondSetOfLinks={props.secondSetOfLinks}
        onCheckedChange={props.onCheckedChange}
      />
    </>
  );
}

export default Hamburger;
