import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";

function MobileMenu(props) {
  return (
    <div className="d-block d-sm-none position-relative">
      <Hamburger
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
      />
      <HamburgerMenu
        username={props.user.url}
        bio={props.user.bio}
        avatar={props.user.avatar}
        firstSetOfLinks={props.firstSetOfLinks}
        secondSetOfLinks={props.secondSetOfLinks}
        onLinkChange={props.onLinkChange}
      />
    </div>
  );
}

export default MobileMenu;
