import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideNavbarItem({ checked, item, onCheckedChange, onToggleChange }) {
  const { pathname } = useLocation();

  function getItemStyle(isLastItem) {
    return {
      height: "66px",
      color: "var(--sidenav-text)",
      transition: "var(--transition-speed)",

      "&:hover": {
        backgroundColor: "var(--sidenav-bg-hovered)",

        "@media (max-width: 1200px)": {
          backgroundColor: "var(--sidenav-bg)",
        },
      },

      "&:hover ion-icon": {
        color: "var(--sidenav-icon-hovered)",
        "@media (max-width: 1200px)": isLastItem
          ? {
              color: "var(--sidenav-icon)",
            }
          : {},
      },

      "&:hover span": {
        color: "var(--sidenav-text-hovered)",
        "@media (max-width: 1200px)": isLastItem
          ? {
              color: "var(--sidenav-text)",
            }
          : {},
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
          item.route === pathname
            ? "var(--sidenav-icon-hovered)"
            : "var(--sidenav-text)"
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
  }

  const textStyle = {
    fontSize: "18px",
    color: "var(--sidenav-text)",
    "@media (max-width: 1200px)": {
      color: `${
        item.route === pathname
          ? "var(--sidenav-text-hovered)"
          : "var(--sidenav-text)"
      }`,
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
      css={getItemStyle(item.route === "")}
    >
      <ion-icon name={`${item.icon}-outline`}></ion-icon>
      <span className="d-none d-xl-block" css={textStyle}>
        {item.text}
      </span>
    </Link>
  );
}

export default SideNavbarItem;
