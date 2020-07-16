import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import httpService from "../../services/httpService";
import qs from "qs";

function LoginHandler({ onLogin, onUserReceive, location }) {
  useEffect(() => {
    const query = qs.parse(location.hash.replace("#", ""));

    async function getUser(username) {
      try {
        const {
          data: { data: userData },
        } = await httpService.get(
          `https://api.imgur.com/3/account/${username}`
        );
        onUserReceive(userData);
      } catch (error) {
        console.error(error.message);
      }
    }

    if ("access_token" in query) {
      getUser(query.account_username);
      return onLogin(query.access_token);
    }
    return;
  });

  return <Redirect to={`${location.search.replace("?state=%2F", "/")}`} />;
}

export default LoginHandler;
