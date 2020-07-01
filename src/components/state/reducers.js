export default function (state, action) {
  if (action.type.endsWith("Success")) state.apiCallsInProgress--;

  switch (action.type) {
    case "apiCallBegan": {
      state.apiCallsInProgress++;
      return;
    }

    case "apiCallFailed": {
      state.apiCallsInProgress--;
      return;
    }

    case "getUserSuccess": {
      const user = action.payload;
      state.currentUser = user;
      window.localStorage.setItem("current_user", JSON.stringify(user));
      return;
    }

    case "finalizeLogin": {
      const token = action.payload;
      state.auth.token = token;
      window.localStorage.setItem("imgur_token", token);
      return;
    }

    case "logout": {
      state.auth.token = null;
      window.localStorage.removeItem("imgur_token");
      state.currentUser = {};
      window.localStorage.removeItem("current_user");
      return;
    }

    case "toggleTheme": {
      if (state.ui.theme === "dark") {
        state.ui.theme = "light";
        window.localStorage.setItem("vernal_theme", "light");
        return;
      } else {
        state.ui.theme = "dark";
        window.localStorage.setItem("vernal_theme", "dark");
        return;
      }
    }

    default:
      return;
  }
}
