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
      backgroundColor: "var(--sidenav-bg-hovered)",
    },

    "&:checked ~ label > ul > li > a > span": {
      display: "flex !important",

      "@media (max-width: 575px)": {
        display: "none !important",
      },
    },

    "&:checked ~ label > ul > li > span": {
      backgroundColor: "var(--sidenav-bg-hovered)",
    },

    "&:checked ~ label > ul > li > span > div": {
      transform: "rotate(-180deg)",
    },

    "&:checked ~ label > ul > li > span > div > ion-icon:first-of-type": {
      color: "var(--sidenav-icon-darker-hovered)",
    },

    "&:checked ~ label > ul > li > span > div > ion-icon:last-child": {
      color: "var(--sidenav-icon-lighter-hovered)",
    },

    "&:checked ~ label > ul > li > span > span": {
      opacity: "1",
      color: "var(--sidenav-text-hovered)",
    },
  };

  return (
    <input
      type="checkbox"
      className="d-none"
      id="toggle-sidenav"
      checked={checked}
      onChange={() => onCheckedChange(!checked)}
      css={checkboxStyle}
    />
  );
}

export default SideNavbarCheckbox;
