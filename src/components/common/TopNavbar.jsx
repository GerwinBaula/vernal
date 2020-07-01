import React, { useContext } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StateContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import { Link, useHistory } from "react-router-dom";
import { css } from "@emotion/core";
import config from "../../config";
import qs from "qs";

function TopNavbar() {
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  function handleInitializeLogin() {
    const queryString = {
      client_id: config.clientId,
      response_type: "token",
    };

    window.location = `${config.rootUrl}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  }

  function handleLogout() {
    history.push("/logout");
  }

  return (
    <>
      <nav
        className="container-fluid py-3 pl-3 pl-sm-1 pr-3 position-fixed"
        css={{
          backgroundColor: "var(--nav-bg)",
          borderBottom: "var(--nav-bg)",
          zIndex: "99",
          "@media (max-width: 1200px)": {
            marginLeft: `${!loggedInStatus ? "0px" : "94px"}`,
            width: `${!loggedInStatus ? "100vw" : "calc(100vw - 94px)"}`,
          },
          "@media (max-width: 575px)": {
            marginLeft: "0px",
            width: "100vw",
          },
        }}
      >
        <div className="container-xl p-0">
          <div className="d-flex align-items-center justify-content-between">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-fill d-sm-none position-relative"
              css={css`
                border: 1px solid var(--text-primary);
                border-radius: 50px;
              `}
            >
              <button
                type="submit"
                className="m-0 pl-2 py-2 pr-1 d-flex justify-content-center align-items-center"
                css={css`
                  border-radius: 50px 0 0 50px;
                  background-color: var(--bg-primary);
                  border: 1px solid var(--bg-primary)
                  border-right: none;
                  color: var(--text-primary);
                  font-size: 20px;

                  &:focus {
                    outline: none;
                  }
                `}
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
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
            </form>
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
                Vernal
              </h3>
            </a>
            {/* Mobile phones */}
            {loggedInStatus ? (
              <MobileMenu />
            ) : (
              <span
                onClick={() => handleInitializeLogin()}
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
              </span>
            )}
            {/* Desktop to tablet */}
            <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
              <div
                css={{
                  width: `${!loggedInStatus ? "60%" : "75%"}`,
                }}
              >
                <form onSubmit={handleSubmit} className="row position-relative">
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
                    <button
                      type="submit"
                      className="h-100 d-flex align-items-center pr-3"
                      css={css`
                        border-radius: 0 50px 50px 0;
                        border: 1px solid var(--text-primary);
                        background-color: var(--bg-primary);
                        border-left: none;
                        color: var(--text-primary);
                        font-size: 18px;

                        &:focus {
                          outline: none;
                        }

                        &:hover {
                          color: var(--text-primary);
                        }
                      `}
                    >
                      <ion-icon name="search-outline"></ion-icon>
                    </button>
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
                </form>
              </div>
            </div>
            <div className="d-none d-sm-inline-flex">
              {loggedInStatus && (
                <Link
                  to="/new-post"
                  className="mr-2 py-2 px-3"
                  css={css`
                    color: var(--text-primary);
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
                  !loggedInStatus ? handleInitializeLogin() : handleLogout()
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
