import React, { useState, useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../../state/contexts";
import BehindTopNavbarContainer from "./BehindTopNavbarContainer";
import TopNavbarContainer from "./TopNavbarContainer";
import stateSelectors from "../../state/selectors";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../services/httpService";
import config from "../../../config";
import qs from "qs";

function TopNavbar() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const results = stateSelectors.getResults(state);
  const resultsLoading = stateSelectors.getResultsLoadingStatus(state);
  const loggedInStatus = stateSelectors.getLoggedInStatus(state);
  const history = useHistory();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    async function search(query) {
      try {
        const { data } = await httpService.get(
          `https://api.imgur.com/3/gallery/search?q=${query}`
        );
        const { data: results } = data;

        return dispatch({ type: "resultsReceived", payload: results });
      } catch (error) {
        dispatch({ type: "resultsRequestFailed", payload: error.message });
      }
    }
    let queryLater = setTimeout(() => {
      search(query);
    }, 500);

    return () => {
      clearTimeout(queryLater);
    };
  }, [query, dispatch]);

  function handleSubmit(event) {
    event.preventDefault();
    // Idk this pa pero yeah we can do this better
    history.push(`/results?query=${query}`);

    dispatch({ type: "resultsRequest" });
    dispatch({ type: "getResultsSuccess", payload: [] });
  }

  function handleInputChange({ target: input }) {
    setQuery(input.value);
    dispatch({ type: "resultsRequest" });
  }

  function handleInitializeLogin() {
    const queryString = {
      client_id: config.clientId,
      response_type: "token",
      state: location.pathname,
    };

    window.location = `${config.rootUrl}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  }

  function handleLogout() {
    history.push({
      pathname: "/logout",
      state: { url: location.pathname },
    });
  }

  return (
    <>
      <TopNavbarContainer
        query={query}
        results={results}
        resultsLoading={resultsLoading}
        onInputChange={handleInputChange}
        onSearch={handleSubmit}
        isFocused={isFocused}
        onFocusChange={setIsFocused}
        loggedInStatus={loggedInStatus}
        onLogin={handleInitializeLogin}
        onLogout={handleLogout}
      />
      <BehindTopNavbarContainer />
    </>
  );
}

export default TopNavbar;

// const performDebounce = useCallback(
//   _.debounce(async (query) => {
//     try {
//       dispatch({ type: "apiCallBegan" });

//       const { data } = await httpService.get(
//         `https://api.imgur.com/3/gallery/search?q=${query}`
//       );
//       const { data: results } = data;

//       if (!query.length)
//         return dispatch({ type: "getResultsSuccess", payload: [] });
//       return dispatch({ type: "getResultsSuccess", payload: results });
//     } catch (error) {
//       dispatch({ type: "apiCallFailed" });
//     }
//   }, 300),
//   []
// );
