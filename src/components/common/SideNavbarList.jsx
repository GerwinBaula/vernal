import React from "react";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/core";

const linksItem = [
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
    icon: "moon",
    text: "Themify",
  },
];

function SideNavbarList() {
  const { pathname } = useLocation();

  return (
    <ul className="d-flex flex-row flex-sm-column align-items-center list-unstyled py-0 m-0 h-100">
      <li className="w-100 d-none d-sm-block d-xl-none mb-1">
        <span
          className="d-flex align-items-center justify-content-end"
          css={css`
            height: 66px;
            padding: 0 16px;
            color: var(--sidenav-text);
            background-color: var(--sidenav-bg);
            transition: var(--transition-speed);

            &:hover {
              background-color: var(--sidenav-bg);
              color: var(--sidenav-text);
            }

            @media (max-width: 575px) {
              height: 64px;
            }

            div {
              display: flex;

              ion-icon:first-of-type {
                font-size: 30px;
                color: var(--sidenav-icon-lighter);
                transform: translateX(10px);
              }

              ion-icon:last-child {
                font-size: 30px;
                color: var(--sidenav-icon-darker);
                transform: translateX(-10px);
              }

              @media (max-width: 575px) {
                font-size: 26px;
              }
            }
          `}
        >
          <span
            className="mr-2"
            css={css`
              font-size: 20px;
              color: var(--sidenav-text);
              opacity: 0;
            `}
          >
            Vernal
          </span>
          <div
            css={css`
              transition: var(--transition-speed);
            `}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </span>
      </li>

      {linksItem.map((item) => (
        <li className={`w-100 ${item.className}`}>
          <Link
            to={item.route || pathname}
            className="d-flex align-items-center justify-content-center justify-content-sm-start"
            css={css`
              height: 66px;
              color: var(--sidenav-text);
              transition: var(--transition-speed);

              &:hover {
                background-color: var(--sidenav-bg-hovered);
                color: var(--sidenav-text-hovered);
              }

              &:hover ion-icon {
                color: var(--sidenav-icon-hovered);
              }

              &:hover span {
                color: var(--sidenav-text-hovered);
              }

              @media (max-width: 575px) {
                height: 64px;
              }

              ion-icon {
                min-width: 50px;
                margin: 0 18px;
                font-size: 30px;

                transition: var(--transition-speed);

                @media (max-width: 1024px) {
                  margin: 0 22px;
                }

                @media (max-width: 575px) {
                  font-size: 26px;
                }
              }
            `}
          >
            <ion-icon name={`${item.icon}-outline`}></ion-icon>
            <span
              className="d-none d-xl-block"
              css={css`
                font-size: 18px;
              `}
            >
              {item.text}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SideNavbarList;
