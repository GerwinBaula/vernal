import React, { useState, useContext } from "react";
import { StateContext } from "../../../state/contexts";
import stateSelectors from "../../../state/selectors";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";

function MobileMenu() {
  const state = useContext(StateContext);
  const user = stateSelectors.getCurrentUser(state);

  const [checked, setChecked] = useState(false);

  const firstSetOfLinks = [
    { route: "/posts", icon: "reader", text: "Posts" },
    { route: "/comments", icon: "chatbubble-ellipses", text: "Comments" },
    { route: "/profile", icon: "person", text: "Profile" },
  ];

  const secondSetOfLinks = [
    { route: "/new-post", icon: "add-circle", text: "New Post" },
    { route: "/settings", icon: "settings", text: "Settings" },
    { route: "/logout", icon: "log-out", text: "Logout" },
  ];

  return (
    <div className="d-block d-sm-none position-relative">
      <Hamburger checked={checked} onCheckedChange={setChecked} />
      <HamburgerMenu
        username={user.url}
        bio={user.bio}
        avatar={user.avatar}
        firstSetOfLinks={firstSetOfLinks}
        secondSetOfLinks={secondSetOfLinks}
      />
    </div>
  );
}

export default MobileMenu;
