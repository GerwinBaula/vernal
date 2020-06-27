import React, { useContext } from "react";
import { StateContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/core";

function SideNavbar() {
  const { pathname } = useLocation();
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);

  return (
    <>
      {loggedInStatus && (
        <nav
          className="overflow-hidden"
          css={css`
            position: fixed;
            width: var(--sidenav-offset-hovered);
            height: calc(100vh - 65px);

            background-color: var(--sidenav-bg);
            z-index: 99;
            transition: var(--transition-speed);

            @media (max-width: 1200px) {
              width: var(--sidenav-offset);

              height: 100vh;
              transform: translateY(-66px);
            }

            @media (max-width: 575px) {
              bottom: 0;
              width: 100vw;
              height: var(--sidenav-offset-mobile);
              transform: translateY(0px);

              overflow: auto !important;
            }

            &:hover {
              width: var(--sidenav-offset-hovered);

              @media (max-width: 575px) {
                width: 100vw;
              }
            }

            &:hover > ul > li > a > span {
              display: flex !important;

              @media (max-width: 575px) {
                display: none !important;
              }
            }

            &:hover > ul > li > span {
              background-color: var(--sidenav-text);
            }

            &:hover > ul > li > span > div {
              transform: rotate(-180deg);
            }

            &:hover > ul > li > span > div > ion-icon:first-of-type {
              color: var(--sidenav-icon-darker-hovered);
            }

            &:hover > ul > li > span > div > ion-icon:last-child {
              color: var(--sidenav-icon-lighter-hovered);
            }

            &:hover > ul > li > span > span {
              opacity: 1;
              color: var(--sidenav-bg);
            }

            &:hover > ul > li a.activeBackground {
              background-color: var(--sidenav-text);
            }

            &:hover > ul > li a > span.activeText {
              color: var(--sidenav-bg);
            }
          `}
        >
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
                  Verix
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

            <li className="w-100 mt-0 mt-xl-1">
              <Link
                to="/"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(--transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
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
                <ion-icon
                  name="home-outline"
                  class={pathname === "/" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="w-100 d-none d-sm-block">
              <Link
                to="/posts"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/posts" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  // transition: var(--transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
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
                <ion-icon
                  name="reader-outline"
                  class={pathname === "/posts" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/posts" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Posts
                </span>
              </Link>
            </li>
            <li className="w-100">
              <Link
                to="/favorites"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/favorites" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(--transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  &:hover span {
                    color: var(--sidenav-bg);
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
                <ion-icon
                  name="star-outline"
                  class={pathname === "/favorites" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/favorites" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Favorites
                </span>
              </Link>
            </li>
            <li className="w-100 d-none d-sm-block">
              <Link
                to="/comments"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/comments" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  @media (max-width: 575px) {
                    height: 64px;
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 18px;
                    font-size: 30px;

                    transition: var(transition-speed);

                    @media (max-width: 1024px) {
                      margin: 0 22px;
                    }

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon
                  name="chatbubble-ellipses-outline"
                  class={pathname === "/comments" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/comments" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Comments
                </span>
              </Link>
            </li>
            <li className="w-100">
              <Link
                to="/images"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/images" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  @media (max-width: 575px) {
                    height: 64px;
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 18px;
                    font-size: 30px;

                    transition: var(transition-speed);

                    @media (max-width: 1024px) {
                      margin: 0 22px;
                    }

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon
                  name="images-outline"
                  class={pathname === "/images" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/images" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Images
                </span>
              </Link>
            </li>
            <li className="w-100 d-none d-sm-block">
              <Link
                to="/profile"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/profile" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  @media (max-width: 575px) {
                    height: 64px;
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 18px;
                    font-size: 30px;

                    transition: var(transition-speed);

                    @media (max-width: 1024px) {
                      margin: 0 22px;
                    }

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon
                  name="person-outline"
                  class={pathname === "/profile" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/profile" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Profile
                </span>
              </Link>
            </li>
            <li className="w-100 d-none d-sm-block">
              <Link
                to="/settings"
                className={`d-flex align-items-center justify-content-center justify-content-sm-start ${
                  pathname === "/settings" && "activeBackground"
                }`}
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  @media (max-width: 575px) {
                    height: 64px;
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 18px;
                    font-size: 30px;

                    transition: var(transition-speed);

                    @media (max-width: 1024px) {
                      margin: 0 22px;
                    }

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon
                  name="settings-outline"
                  class={pathname === "/settings" && "activeIcon"}
                ></ion-icon>
                <span
                  className={`d-none d-xl-block ${
                    pathname === "/settings" && "activeText"
                  }`}
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Settings
                </span>
              </Link>
            </li>
            <li className="w-100 m-0 mt-sm-auto">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: var(transition-speed);

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  @media (max-width: 575px) {
                    height: 64px;
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 18px;
                    font-size: 30px;

                    transition: var(transition-speed);

                    @media (max-width: 1024px) {
                      margin: 0 22px;
                    }

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="moon-outline"></ion-icon>
                <span
                  className="d-none d-xl-block"
                  css={css`
                    font-size: 18px;
                  `}
                >
                  Themify
                </span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default SideNavbar;
