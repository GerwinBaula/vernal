import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";

const breakpoints = [1024, 575];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function TopNavbar() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);

  return (
    <>
      <nav
        className="container-fluid py-3 pl-3 pl-sm-1 pr-3 position-fixed"
        css={{
          backgroundColor: "var(--nav-bg)",
          borderBottom: "var(--nav-bg)",
          zIndex: "99",
          [mq[0]]: {
            marginLeft: `${!loggedInStatus ? "0px" : "94px"}`,
            width: `${!loggedInStatus ? "100vw" : "calc(100vw - 94px)"}`,
          },
          [mq[1]]: {
            marginLeft: "0px",
            width: "100vw",
          },
        }}
      >
        <div className="container-xl p-0">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex flex-fill d-sm-none position-relative"
              css={css`
                border: 1px solid var(--text-primary);
                border-radius: 50px;
              `}
            >
              <div
                className="m-0 pl-2 py-2 pr-1 d-flex justify-content-center align-items-center"
                css={css`
                  color: var(--text-primary);
                  font-size: 20px;
                `}
              >
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <input
                type="text"
                className="w-100 mr-3"
                placeholder="Images, #tag, @user..."
                css={css`
                  border: none;
                  border-radius: 0 50px 50px 0;
                  outline: none;
                  background-color: var(--bg-primary);
                  color: var(--text-primary);

                  &::placeholder {
                    color: var(--text-primary);
                  }
                `}
              />
              {/* <ul
                className="list-group position-absolute w-100"
                css={css`
                  top: 36px;
                  box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);

                  & > * {
                    background-color: var(--bg-primary);
                    color: var(--text-primary);
                  }
                `}
              >
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--text-primary);
                  `}
                >
                  Cras justo odio
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--text-primary);
                  `}
                >
                  Dapibus ac facilisis in
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--text-primary);
                  `}
                >
                  Morbi leo risus
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--text-primary);
                  `}
                >
                  Porta ac consectetur ac
                </li>
                <li
                  className="list-group-item py-2 px-3"
                  css={css`
                    border-color: var(--text-primary);
                  `}
                >
                  Vestibulum at eros
                </li>
              </ul> */}
            </div>
            {/* Set some condition in the margins and paddings */}
            <a
              href="/"
              className={
                !loggedInStatus
                  ? "pl-0 mx-4 mx-lg-3 mx-xl-2"
                  : "mx-4 mx-sm-5 px-0 px-xl-4 d-block d-sm-none d-xl-block"
              }
            >
              <h3
                className={!loggedInStatus ? "mb-0" : "mb-0 ml-2"}
                css={css`
                  color: var(--text-primary);
                `}
              >
                Verix
              </h3>
            </a>
            {/* Mobile phones */}
            {loggedInStatus ? (
              <div className="d-block d-sm-none position-relative">
                <input
                  type="checkbox"
                  className="d-none"
                  id="toggle-hamburger"
                  css={css`
                    &:checked ~ .hamburger {
                      // transform: rotate(360deg);
                      background: transparent;
                    }

                    &:checked ~ .hamburger::before {
                      transform: rotate(45deg);
                    }

                    &:checked ~ .hamburger::after {
                      transform: rotate(-45deg);
                    }
                    &:checked ~ .mobile-menu {
                      opacity: 1;
                      left: -215px;
                    }
                  `}
                />
                <label
                  htmlFor="toggle-hamburger"
                  className="mt-3 hamburger"
                  css={css`
                  width: 30px;
                  height: 4px;
                  background: var(--text-primary);
                  border-radius: 5px;
                  transition: var(--transition-speed);
                  position: relative;

                  &::before,
                  &::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height 4px;
                    background: var(--text-primary);
                    border-radius: 5px;
                    transition: var(--transition-speed);
                  }

                  &::before {
                    transform: translateY(-9px);
                  }

                  &::after {
                    transform: translateY(9px);
                  }
              `}
                ></label>
                <div
                  className="mobile-menu position-absolute"
                  css={css`
                    top: 40px;
                    left: 100px;
                    // left: -215px;
                    min-height: 100px;
                    width: 245px;
                    border: 1px solid var(--mobile-sidebar-border);
                    background-color: var(--mobile-sidebar-bg);
                    border-radius: 5px;
                    opacity: 0;
                    box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);
                    transition: var(--transition-speed);
                  `}
                >
                  <div
                    className="d-flex align-items-center p-3"
                    css={css`
                      border-bottom: 1px solid var(--mobile-sidebar-border);
                    `}
                  >
                    <div className="mr-3">
                      <div
                        css={css`
                          height: 40px;
                          width: 40px;
                          border: 1px solid var(--avatar-border);
                          border-radius: 50px;
                        `}
                      ></div>
                    </div>
                    <div className="flex-fill p-0 d-flex flex-column justify-content-center align-items-start">
                      <h5
                        className="m-0"
                        css={css`
                          color: var(--mobile-sidebar-text);
                        `}
                      >
                        Athea Verix
                      </h5>
                      <p
                        className="m-0"
                        css={css`
                          color: var(--mobile-sidebar-text);
                        `}
                      >
                        Gago na sweeet pa! :*
                      </p>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1"
                    css={css`
                      border-bottom: 1px solid var(--mobile-sidebar-border);
                    `}
                  >
                    <div className="row">
                      <Link
                        to="/posts"
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="reader-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-icon);
                          }
                        `}
                      >
                        <ion-icon name="reader-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          Posts
                        </span>
                      </Link>
                      <Link
                        to="/comments"
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="chatbubble-ellipses-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-icon);
                          }
                        `}
                      >
                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          Comments
                        </span>
                      </Link>
                      <Link
                        to="/profile"
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="person-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-sidebar-text);
                          }
                        `}
                      >
                        <ion-icon name="person-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          Profile
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="px-3 py-1">
                    <div className="row">
                      <Link
                        to="/new-post"
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="add-circle-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-icon);
                          }
                        `}
                      >
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          New Post
                        </span>
                      </Link>
                      <Link
                        to="/settings"
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="settings-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-icon);
                          }
                        `}
                      >
                        <ion-icon name="settings-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          Settings
                        </span>
                      </Link>
                      <div
                        onClick={() => dispatch({ type: "logout" })}
                        className="col-sm py-2 d-flex align-items-center"
                        css={css`
                          ion-icon[name="log-out-outline"] {
                            margin-left: 8px;
                            font-size: 26px;
                            color: var(--mobile-icon);
                          }
                        `}
                      >
                        <ion-icon name="log-out-outline"></ion-icon>
                        <span
                          className="ml-4"
                          css={css`
                            color: var(--mobile-sidebar-text);
                          `}
                        >
                          Logout
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                href="#"
                onClick={() => dispatch({ type: "initializeLogin" })}
                className="py-2 px-4 d-block d-block d-sm-none"
                css={css`
                  border: 1px solid var(--text-primary);
                  border-radius: 50px;
                  color: var(--text-primary);
                  background-color: var(--bg-primary);

                  &:hover {
                    background-color: var(--text-primary);
                    color: var(--bg-primary);
                  }
                `}
              >
                Login
              </a>
            )}
            {/* Desktop to tablet */}
            <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
              <div
                css={{
                  width: `${!loggedInStatus ? "60%" : "75%"}`,
                }}
              >
                <div className="row position-relative">
                  <div className="col px-0">
                    <input
                      type="text"
                      className="w-100 py-2 pl-4"
                      placeholder="Images, #tag, @user..."
                      css={css`
                        border-radius: 50px 0 0 50px;
                        border: 1px solid var(--text-primary);
                        border-right: none;
                        outline: none;
                        background-color: var(--bg-primary);
                        color: var(--text-primary);

                        &::placeholder {
                          color: var(--text-primary);
                        }
                      `}
                    />
                  </div>
                  <div className="px-0 d-flex justify-content-center align-items-center">
                    <a
                      href="#"
                      className="h-100 d-flex align-items-center pr-3"
                      css={css`
                        border-radius: 0 50px 50px 0;
                        border: 1px solid var(--text-primary);
                        border-left: none;
                        color: var(--text-primary);
                        font-size: 18px;

                        &:hover {
                          color: var(--text-primary);
                        }
                      `}
                    >
                      <ion-icon name="search-outline"></ion-icon>
                    </a>
                  </div>
                  {/* <ul
                    className="list-group position-absolute w-100"
                    css={css`
                      top: 38px;
                      box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);

                      & > * {
                        background-color: var(--bg-primary);
                        color: var(--text-primary);
                      }
                    `}
                  >
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--text-primary);
                      `}
                    >
                      Cras justo odio
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--text-primary);
                      `}
                    >
                      Dapibus ac facilisis in
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--text-primary);
                      `}
                    >
                      Morbi leo risus
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--text-primary);
                      `}
                    >
                      Porta ac consectetur ac
                    </li>
                    <li
                      className="list-group-item py-2 px-3"
                      css={css`
                        border-color: var(--text-primary);
                      `}
                    >
                      Vestibulum at eros
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="d-none d-sm-inline-flex">
              {loggedInStatus && (
                <Link
                  to="/new-post"
                  className="mr-2 py-2 px-3"
                  css={css`
                    color: var(--text-primary);
                    // border-radius: 2px;
                    // visibility: hidden;
                    transition: var(--transition-speed);

                    &:hover {
                      background-color: var(--text-primary);
                      color: var(--bg-primary);
                    }
                  `}
                >
                  + New Post
                </Link>
              )}
              <span
                href="#"
                onClick={() =>
                  dispatch({
                    type: `${!loggedInStatus ? "initializeLogin" : "logout"}`,
                  })
                }
                className="ml-2 py-2 px-4"
                css={css`
                  border: 1px solid var(--text-primary);
                  border-radius: 50px;
                  color: var(--text-primary);
                  background-color: var(--bg-primary);
                  cursor: pointer;

                  &:hover {
                    background-color: var(--text-primary);
                    color: var(--bg-primary);
                  }
                `}
              >
                {!loggedInStatus ? "Login" : "Logout"}
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div
        css={css`
          height: 65px;

          @media (max-width: 575px) {
            height: 64px;
          }
        `}
      ></div>
    </>
  );
}

export default TopNavbar;
