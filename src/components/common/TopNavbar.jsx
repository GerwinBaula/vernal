import React, { useContext, useCallback } from "react";
import { StateContext, DispatchContext } from "../state/contexts";
import stateSelectors from "../state/selectors";
import { useHistory } from "react-router-dom";
import config from "../../config";
import qs from "qs";
import MobileSearchInput from "./MobileSearchInput";
import httpService from "../services/httpService";
import _ from "lodash";
import Name from "./Name";
import MobileButtons from "./MobileButtons";
import DesktopSearchInput from "./DesktopSearchInput";
import DesktopButtons from "./DesktopButtons";
import BehindTopNavbar from "./BehindTopNavbar";

// Refactor the search inputs
function TopNavbar() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const loggedInStatus = stateSelectors.getLoggedInStatus(state);
  const results = stateSelectors.getResults(state);
  const query = stateSelectors.getQuery(state);
  const isFocused = stateSelectors.getSearchInputState(state);
  const history = useHistory();

  const performDebounce = useCallback(
    _.debounce(async (query) => {
      try {
        dispatch({ type: "apiCallBegan" });

        const { data } = await httpService.get(
          `https://api.imgur.com/3/gallery/search?q=${query}`
        );
        const { data: results } = data;

        if (!query) return dispatch({ type: "getResultsSuccess", payload: [] });
        return dispatch({ type: "getResultsSuccess", payload: results });
      } catch (error) {
        dispatch({ type: "apiCallFailed" });
      }
    }, 300),
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    // Idk this pa pero yeah we can do this better
    history.push(`/results?query=${query}`);

    dispatch({ type: "apiCallBegan" });
    dispatch({ type: "getResultsSuccess", payload: [] });
  }

  function handleInputChange({ target: input }) {
    dispatch({ type: "query", payload: input.value });
    performDebounce(input.value);
  }

  function handleFocusChange() {
    dispatch({ type: "toggleFocused" });
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
        <div className="container-xl p-0 d-flex align-items-center justify-content-between">
          <MobileSearchInput
            query={query}
            results={results}
            onInputChange={handleInputChange}
            onSearch={handleSubmit}
            isFocused={isFocused}
            onFocusChange={handleFocusChange}
          />
          <Name loggedInStatus={loggedInStatus} />
          <MobileButtons
            loggedInStatus={loggedInStatus}
            onLogin={handleInitializeLogin}
          />
          <DesktopSearchInput
            loggedInStatus={loggedInStatus}
            query={query}
            results={results}
            onInputChange={handleInputChange}
            onSearch={handleSubmit}
            isFocused={isFocused}
            onFocusChange={handleFocusChange}
          />
          <DesktopButtons
            loggedInStatus={loggedInStatus}
            onLogin={handleInitializeLogin}
            onLogout={handleLogout}
          />
        </div>
      </nav>
      <BehindTopNavbar />
    </>
  );
}

export default TopNavbar;
