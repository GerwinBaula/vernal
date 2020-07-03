import React, { useContext, useCallback } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import { StateContext, DispatchContext } from "../state/contexts";
import { getLoggedInStatus, getQuery, getResults } from "../state/selectors";
import { Link, useHistory } from "react-router-dom";
import { css } from "@emotion/core";
import config from "../../config";
import qs from "qs";
import SearchInput from "./SearchInput";
import MobileSearchInput from "./MobileSearchInput";
import httpService from "../services/httpService";
import _ from "lodash";

// Perform optimistic updates
// When focusedOut remove the results list
// Refactor the search inputs
function TopNavbar() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const loggedInStatus = getLoggedInStatus(state);
  const results = getResults(state);
  const query = getQuery(state);
  const history = useHistory();

  const debounceInReact = useCallback(
    _.debounce(async (query) => {
      try {
        dispatch({ type: "apiCallBegan" });
        const { data } = await httpService.get(
          `https://api.imgur.com/3/gallery/search?q=${query}`
        );
        const { data: results } = data;
        dispatch({ type: "getResultsSuccess", payload: results });
      } catch (error) {
        dispatch({ type: "apiCallFailed" });
      }
    }, 500),
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  function handleInputChange({ target: input }) {
    dispatch({ type: "query", payload: input.value });
    debounceInReact(input.value);
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
            <MobileSearchInput
              query={query}
              results={results}
              onInputChange={handleInputChange}
              onSearch={handleSubmit}
            />
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
                <SearchInput
                  query={query}
                  results={results}
                  onInputChange={handleInputChange}
                  onSearch={handleSubmit}
                />
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
