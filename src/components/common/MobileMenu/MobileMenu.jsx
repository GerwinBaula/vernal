import React, { useState, useContext } from "react";
import { StateContext } from "../../state/contexts";
import { getCurrentUser } from "../../state/selectors"
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";

function MobileMenu() {
  const state = useContext(StateContext);
  const user = getCurrentUser(state);

  const [checked, setChecked] = useState(false);

  return (
    <div className="d-block d-sm-none position-relative">
      <Hamburger checked={checked} onCheckedChange={setChecked} />
      <HamburgerMenu username={user.url} bio={user.bio} avatar={user.avatar} />
    </div>
  );
}

export default MobileMenu;
