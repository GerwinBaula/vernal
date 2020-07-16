import React from "react";

function SideNavbarCheckbox({ checked, onCheckedChange }) {
  const checkboxStyle = {
    "&:checked ~ label": {
      width: "var(--sidenav-offset-hovered)",
      "@media (max-width: 575px)": {
        width: "100vw",
      },
    },
    "&:checked ~ label > ul > li > a.activeSideNavItem": {
      "@media (max-width: 1200px)": {
        backgroundColor: "var(--bg-primary)",
      },
    },
    // List Text
    "&:checked ~ label > ul > li > a > span": {
      display: "flex !important",
      "@media (max-width: 575px)": {
        display: "none !important",
      },
    },
    // Title Container
    "&:checked ~ label > ul > li > span": {
      backgroundColor: "var(--bg-primary)",
    },
    // Title Icon
    "&:checked ~ label > ul > li > span > div": {
      transform: "rotate(-180deg)",
    },
    // Title First Icon
    "&:checked ~ label > ul > li > span > div > ion-icon:first-of-type": {
      color: "var(--bg-tertiary)",
    },
    // Title Second Icon
    "&:checked ~ label > ul > li > span > div > ion-icon:last-child": {
      color: "var(--text-tertiary)",
    },
    // Title Text
    "&:checked ~ label > ul > li > span > span": {
      opacity: "1",
      color: "var(--text-primary)",
    },
  };

  return (
    <input
      type="checkbox"
      className="d-none"
      id="toggle-sidenav"
      checked={checked}
      onChange={() => onCheckedChange()}
      css={checkboxStyle}
    />
  );
}

export default SideNavbarCheckbox;
