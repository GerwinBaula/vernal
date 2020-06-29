import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";

function MobileMenu({ user }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="d-block d-sm-none position-relative">
      <Hamburger checked={checked} onCheckedChange={setChecked} />
      <HamburgerMenu username={user.url} bio={user.bio} avatar={user.avatar} />
    </div>
  );
}

export default MobileMenu;
