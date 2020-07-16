import React from "react";
import MobileMenu from "./MobileMenu";
import MobileAuthButton from "./MobileAuthButton";

function MobileButtons(props) {
  return (
    <>
      {props.isLoggedIn ? (
        <MobileMenu
          onLinkChange={props.onLinkChange}
          user={props.user}
          checked={props.checked}
          onCheckedChange={props.onCheckedChange}
          firstSetOfLinks={props.firstSetOfLinks}
          secondSetOfLinks={props.secondSetOfLinks}
        />
      ) : (
        <MobileAuthButton onLinkChange={props.onLinkChange} />
      )}
    </>
  );
}

export default MobileButtons;
