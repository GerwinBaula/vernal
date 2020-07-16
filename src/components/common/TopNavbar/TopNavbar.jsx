import React, { useState, useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../../state/contexts";
import BehindTopNavbarContainer from "./BehindTopNavbarContainer";
import TopNavbarContainer from "./TopNavbarContainer";
import stateSelectors from "../../state/selectors";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../services/httpService";
import config from "../../../config";
import qs from "qs";
import useCheckbox from "../../customHooks/useCheckbox";

function TopNavbar({ isLoggedIn, user }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const results = stateSelectors.getResults(state);
  const resultsLoading = stateSelectors.getResultsLoadingStatus(state);
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
    dispatch({ type: "resultsReceived", payload: [] });
  }

  function handleInputChange({ target: input }) {
    setQuery(input.value);
    dispatch({ type: "resultsRequest" });
  }

  const [checked, handleCheckedChange] = useCheckbox();

  function handleLinkChange(link) {
    if (link === "/login") {
      const queryString = {
        client_id: config.clientId,
        response_type: "token",
        state: location.pathname,
      };
      return (window.location = `${
        config.rootUrl
      }/oauth2/authorize?${qs.stringify(queryString)}`);
    }
    if (link === "/logout")
      return history.push({
        pathname: link,
        state: { url: location.pathname },
      });
    return history.push({
      pathname: link,
    });
  }

  const firstSetOfLinks = [
    { route: "/posts", icon: "reader", text: "Posts" },
    { route: "/comments", icon: "chatbubble-ellipses", text: "Comments" },
    { route: "/profile", icon: "person", text: "Profile" },
  ];

  const secondSetOfLinks = [
    { route: "/new-post", icon: "add-circle", text: "New Post" },
    { route: "/settings", icon: "settings", text: "Settings" },
    { route: "/logout", icon: "log-out", text: "Logout" },
  ];

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
        isLoggedIn={isLoggedIn}
        onLinkChange={handleLinkChange}
        user={user}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        firstSetOfLinks={firstSetOfLinks}
        secondSetOfLinks={secondSetOfLinks}
      />
      <BehindTopNavbarContainer />
    </>
  );
}

export default TopNavbar;
