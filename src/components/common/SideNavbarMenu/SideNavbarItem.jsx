import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideNavbarItem({ checked, item, onCheckedChange, onToggleChange }) {
  const { pathname } = useLocation();

  const itemStyle = {
    height: "66px",
    color: "var(--bg-primary)",
    transition: "var(--transition-speed)",

    "&:hover": {
      backgroundColor: "var(--bg-primary)",
    },

    "&:hover ion-icon": {
      color: "var(--bg-tertiary)",
    },

    "&:hover span": {
      color: "var(--text-primary)",
    },

    "@media (max-width: 575px)": {
      height: "64px",
    },

    "ion-icon": {
      minWidth: "50px",
      margin: "0 18px",
      fontSize: "30px",
      transition: "var(--transition-speed)",
      color: `${
        item.route === pathname ? "var(--bg-tertiary)" : "var(--bg-primary)"
      }`,

      "@media (max-width: 1200px)": {
        margin: "0 22px",
      },

      "@media (max-width: 575px)": {
        minWidth: "40px",
        fontSize: "26px",
      },
    },
  };

  const textStyle = {
    fontSize: "18px",
    color: "var(--bg-primary)",

    "@media (max-width: 1200px)": {
      color: `${
        item.route === pathname ? "var(--text-primary)" : "var(--bg-primary)"
      }`,

      "&:hover": {
        color: "var(--bg-primary)",
      },
    },
  };

  function getClickFunction(isLastItem) {
    if (isLastItem) onToggleChange();
    checked && onCheckedChange();
  }

  return (
    <Link
      onClick={() => getClickFunction(item.route === "")}
      to={item.route || pathname}
      className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
        item.route === pathname && "activeSideNavItem"
      }`}
      css={itemStyle}
    >
      <ion-icon name={`${item.icon}-outline`}></ion-icon>
      <span className="d-none d-xl-block" css={textStyle}>
        {item.text}
      </span>
    </Link>
  );
}

export default SideNavbarItem;
