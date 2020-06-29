import React, { useEffect, useContext } from "react";
import { DispatchContext } from "../state/contexts";
import { Redirect } from "react-router-dom";
import httpService from "../services/httpService";
import qs from "qs";

function AuthHandler({ location: { hash } }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    const query = qs.parse(hash.replace("#", ""));

    async function getUser(username) {
      try {
        const {
          data: { data: userData },
        } = await httpService.get(
          `https://api.imgur.com/3/account/${username}`
        );
        dispatch({ type: "getUserSuccess", payload: userData });
      } catch (error) {
        dispatch({ type: "apiCallFailed" });
      }
    }

    if ("access_token" in query) {
      dispatch({ type: "apiCallBegan" });
      getUser(query.account_username);
      return dispatch({ type: "finalizeLogin", payload: query.access_token });
    }
    return;
  });

  return <Redirect to="/" />;
}

export default AuthHandler;
