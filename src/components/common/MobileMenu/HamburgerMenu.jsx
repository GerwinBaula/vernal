import React from "react";
import { css } from "@emotion/core";
import HamburgerInfo from "./HamburgerInfo";
import HamburgerList from "./HamburgerList";

function HamburgerMenu({ username, bio, avatar }) {
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

  const hamburgerMenuStyle = css`
    top: 40px;
    left: 100px;
    min-height: 100px;
    width: 245px;
    border: 1px solid var(--mobile-sidebar-border);
    background-color: var(--mobile-sidebar-bg);
    border-radius: 5px;
    opacity: 0;
    box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);
    transition: var(--transition-speed);
  `;

  return (
    <div className="mobile-menu position-absolute" css={hamburgerMenuStyle}>
      <HamburgerInfo username={username} bio={bio} avatar={avatar} />
      <HamburgerList links={firstSetOfLinks} />
      <HamburgerList links={secondSetOfLinks} />
    </div>
  );
}

export default HamburgerMenu;
