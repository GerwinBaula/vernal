import qs from "qs";
import config from "../../config";

export default function (state, action) {
  switch (action.type) {
    case "initializeLogin": {
      const queryString = {
        client_id: config.clientId,
        response_type: "token",
      };

      window.location = `${config.rootUrl}/oauth2/authorize?${qs.stringify(
        queryString
      )}`;
      return;
    }

    case "finalizeLogin": {
      const query = qs.parse(action.payload.replace("#", ""));
      state.auth.token = query.access_token;
      window.localStorage.setItem("imgur_token", query.access_token);
      return;
    }

    case "logout": {
      state.auth.token = null;

      window.localStorage.removeItem("imgur_token");
      return;
    }

    default:
      return;
  }
}
