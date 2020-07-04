import React from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import MobileAuthButton from "./MobileAuthButton";

function MobileButtons({ loggedInStatus, onLogin }) {
  return (
    <>
      {loggedInStatus ? <MobileMenu /> : <MobileAuthButton onLogin={onLogin} />}
    </>
  );
}

export default MobileButtons;
