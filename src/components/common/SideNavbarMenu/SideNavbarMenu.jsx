import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../../state/contexts";
import {
  getLoggedInStatus,
  getCurrentTheme,
  getCheckbox,
} from "../../state/selectors";
import SideNavbar from "./SideNavbar";

function SideNavbarMenu() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const loggedInStatus = getLoggedInStatus(state);
  const theme = getCurrentTheme(state);
  const checkboxName = "sidenav";
  const checked = getCheckbox(state, checkboxName);

  function handleCheckedChange() {
    dispatch({ type: "toggleCheckbox", payload: checkboxName });
  }

  function handleToggleChange() {
    dispatch({ type: "toggleTheme" });
  }

  // You can set some condition with state and mutate the items in the list
  const listItems = [
    {
      className: "d-none d-sm-block d-xl-none mb-1",
      icon: "chevron-forward",
      title: "Vernal",
    },
    { className: "mt-0 mt-xl-1", route: "/", icon: "home", text: "Home" },
    {
      className: "d-none d-sm-block",
      route: "/posts",
      icon: "reader",
      text: "Posts",
    },
    { className: "", route: "/favorites", icon: "star", text: "Favorites" },
    {
      className: "d-none d-sm-block",
      route: "/comments",
      icon: "chatbubble-ellipses",
      text: "Comments",
    },
    { className: "", route: "/images", icon: "images", text: "Images" },
    {
      className: "d-none d-sm-block",
      route: "/profile",
      icon: "person",
      text: "Profile",
    },
    {
      className: "d-none d-sm-block",
      route: "/settings",
      icon: "settings",
      text: "Settings",
    },
    {
      className: "m-0 mt-sm-auto",
      route: "",
      icon: theme === "dark" ? "moon" : "sunny",
      text: "Themify",
    },
  ];

  return (
    <>
      {loggedInStatus && (
        <SideNavbar
          listItems={listItems}
          checked={checked}
          onCheckedChange={handleCheckedChange}
          onToggleChange={handleToggleChange}
        />
      )}
    </>
  );
}

export default SideNavbarMenu;
