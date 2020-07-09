import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../../../state/contexts";
import stateSelectors from "../../../state/selectors";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "./Hamburger";

function MobileMenu() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const user = stateSelectors.getCurrentUser(state);
  const checkboxName = "mobile";
  const checked = stateSelectors.getCheckbox(state, checkboxName);

  function handleCheckedChange() {
    dispatch({ type: "toggleCheckbox", payload: checkboxName });
  }

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
      <Hamburger checked={checked} onCheckedChange={handleCheckedChange} />
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
