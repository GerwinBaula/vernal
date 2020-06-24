import React from "react";
import { css } from "@emotion/core";

function App() {
  return (
    <>
      <nav
        className="container-fluid py-3 pl-3 pl-sm-1 pr-3 position-fixed"
        css={css`
          background-color: var(--nav-bg);
          border-bottom: var(--nav-bg);
          z-index: 99;
        `}
      >
        <div className="container-xl p-0">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex flex-fill d-sm-none position-relative"
              css={css`
                border: 1px solid var(--text-primary);
                border-radius: 50px;
                transition: 0.8s all;
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

            <a href="/" className="mx-4 mx-sm-3">
              <h3
                className="m-0"
                css={css`
                  color: var(--text-primary);
                `}
              >
                Vernal
              </h3>
            </a>

            {/* Mobile phones */}
            <a
              href="#"
              // className="py-2 px-4 d-block d-block d-sm-none"
              className="py-2 px-4 d-none"
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
            {/* <div className="d-none"> */}
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
                  transition: all .2s ease-in-out;
                  position: relative;

                  &::before,
                  &::after {
                    content: '';
                    position: absolute;
                    width: 30px;
                    height 4px;
                    background: var(--text-primary);
                    border-radius: 5px;
                    transition: all .2s ease-in-out;
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
                  border: 1px solid var(--text-primary);
                  border-radius: 5px;
                  background-color: var(--bg-primary);
                  opacity: 0;
                  box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);
                  transition: 0.6s all;
                `}
              >
                <div
                  className="d-flex align-items-center p-3"
                  css={css`
                    border-bottom: 1px solid var(--text-primary);
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
                        color: var(--text-primary);
                      `}
                    >
                      Athea Verix
                    </h5>
                    <p
                      className="m-0"
                      css={css`
                        color: var(--text-primary);
                      `}
                    >
                      Gago na sweeet pa! :*
                    </p>
                  </div>
                </div>
                <div
                  className="px-3 py-1"
                  css={css`
                    border-bottom: 1px solid var(--text-primary);
                  `}
                >
                  <div className="row">
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="reader-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="reader-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        Posts
                      </span>
                    </div>
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="chatbubble-ellipses-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        Comments
                      </span>
                    </div>
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="person-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="person-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        About
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1">
                  <div className="row">
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="add-circle-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="add-circle-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        New Post
                      </span>
                    </div>
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="settings-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="settings-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        Settings
                      </span>
                    </div>
                    <div
                      className="col-sm py-2 d-flex align-items-center"
                      css={css`
                        ion-icon[name="log-out-outline"] {
                          margin-left: 10px;
                          font-size: 26px;
                          color: var(--mobile-icon);
                        }
                      `}
                    >
                      <ion-icon name="log-out-outline"></ion-icon>
                      <span
                        className="ml-4"
                        css={css`
                          color: var(--text-primary);
                        `}
                      >
                        Logout
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop to tablet */}
            <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
              <div
                css={css`
                  width: 50%;

                  @media (max-width: 1024px) {
                    width: 75%;
                  }
                `}
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
                    <span
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
                    </span>
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
              <a
                href="#"
                className="mr-2 py-2 px-3"
                css={css`
                  color: var(--text-primary);
                  border-radius: 2px;
                  // visibility: hidden;
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--text-primary);
                    color: var(--bg-primary);
                  }
                `}
              >
                + New Post
              </a>
              <a
                href="#"
                className="ml-2 py-2 px-4"
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
                Logout
              </a>
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
      <div className="container-xl p-0 d-flex">
        <nav
          className="overflow-hidden"
          css={css`
            position: fixed;
            width: 90px;
            height: calc(100vh - 60px);
            background-color: var(--sidenav-bg);
            z-index: 99;
            transition: 0.2s all;

            @media (max-width: 575px) {
              bottom: 0;
              width: 100vw;
              height: 64px;

              overflow: auto !important;
            }

            &:hover {
              width: 210px;

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
          `}
        >
          <ul className="d-flex flex-row flex-sm-column align-items-center list-unstyled py-0 py-sm-1 m-0 h-100">
            <li className="w-100">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="home-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Home
                </span>
              </a>
            </li>
            <li className="w-100 d-none d-sm-block">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="reader-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Posts
                </span>
              </a>
            </li>
            <li className="w-100">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

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

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="star-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Favorites
                </span>
              </a>
            </li>
            <li className="w-100 d-none d-sm-block">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Comments
                </span>
              </a>
            </li>
            <li className="w-100">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="images-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Images
                </span>
              </a>
            </li>
            <li className="w-100 d-none d-sm-none">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="person-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  About
                </span>
              </a>
            </li>
            <li className="w-100 m-0 mt-sm-auto">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center justify-content-sm-start"
                css={css`
                  height: 66px;
                  color: var(--sidenav-text);
                  transition: 0.2s all;

                  &:hover {
                    background-color: var(--sidenav-text);
                    color: var(--sidenav-bg);
                  }

                  &:hover ion-icon {
                    color: var(--sidenav-icon-hovered);
                  }

                  ion-icon {
                    min-width: 50px;
                    margin: 0 20px;
                    font-size: 30px;

                    transition: 0.2s all;

                    @media (max-width: 575px) {
                      font-size: 26px;
                    }
                  }
                `}
              >
                <ion-icon name="moon-outline"></ion-icon>
                <span
                  className="d-none"
                  css={css`
                    font-size: 18px;
                    transition: 0.2s all;
                  `}
                >
                  Themify
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <main
          className="flex-fill"
          css={css`
            margin-left: 90px;

            @media (max-width: 575px) {
              margin-left: 0px;
            }
          `}
        >
          <div className="container-fluid p-4">
            <div className="container">
              <div className="row m-0">
                <div className="col p-0">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente optio perspiciatis praesentium eligendi amet
                    corporis maiores similique hic! Laboriosam iste culpa
                    corporis, minus distinctio ab tempore quae. Doloribus,
                    labore minus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
