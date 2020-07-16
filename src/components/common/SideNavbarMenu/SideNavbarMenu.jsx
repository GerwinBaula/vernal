import React from "react";
import SideNavbar from "./SideNavbar";
import useCheckbox from "../../customHooks/useCheckbox";

function SideNavbarMenu({ theme, onThemeChange, isLoggedIn }) {
  const [checked, handleCheckedChange] = useCheckbox();

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
      {isLoggedIn && (
        <SideNavbar
          listItems={listItems}
          checked={checked}
          onCheckedChange={handleCheckedChange}
          onThemeChange={onThemeChange}
        />
      )}
    </>
  );
}

export default SideNavbarMenu;
