import React from "react";
import { css } from "@emotion/core";
import SideNavbarList from "./SideNavbarList";

function SideNavbarLabel({
  checked,
  listItems,
  onCheckedChange,
  onThemeChange,
}) {
  const labelStyle = css`
    position: fixed;
    width: var(--sidenav-offset-hovered);
    height: calc(100vh - 65px);

    background-color: var(--text-primary);
    z-index: 99;
    transition: var(--transition-speed);

    @media (max-width: 1200px) {
      width: var(--sidenav-offset);

      height: 100.2vh;
      transform: translateY(-66px);
    }

    @media (max-width: 575px) {
      bottom: 0;
      width: 100vw;
      height: var(--sidenav-offset-mobile);
      transform: translateY(0px);

      overflow: auto !important;
    }
  `;

  return (
    <label
      htmlFor="toggle-sidenav"
      className="overflow-hidden m-0"
      onMouseLeave={() => checked && onCheckedChange(!checked)}
      onMouseEnter={() => !checked && onCheckedChange(!checked)}
      css={labelStyle}
    >
      <SideNavbarList
        checked={checked}
        listItems={listItems}
        onCheckedChange={onCheckedChange}
        onThemeChange={onThemeChange}
      />
    </label>
  );
}

export default SideNavbarLabel;
