export default function (state, action) {
  switch (action.type) {
    case "userReceived": {
      const user = action.payload;
      state.auth.user = user;
      window.localStorage.setItem("vernal_user", JSON.stringify(user));
      return;
    }

    case "userRequestFailed": {
      const errorMessage = action.payload;
      console.error(errorMessage);
      return;
    }

    case "resultsRequest": {
      state.entities.results.isLoading = true;
      return;
    }

    case "resultsReceived": {
      const results = action.payload;
      const slicedResults = results.slice(0, 5);
      state.entities.results.isLoading = false;
      state.entities.results.list = slicedResults;
      return;
    }

    case "resultsRequestFailed": {
      const errorMessage = action.payload;
      console.error(errorMessage);
      return;
    }

    case "tagsRequest": {
      state.entities.tags.isLoading = true;
      return;
    }

    case "tagsReceived": {
      const tags = action.payload;
      state.entities.tags.list = tags;
      state.entities.tags.isLoading = false;
      state.entities.tags.lastFetch = Date.now();
      return;
    }

    case "tagsRequestFailed": {
      const errorMessage = action.payload;
      console.error(errorMessage);
      return;
    }

    case "finalizeLogin": {
      const token = action.payload;
      state.auth.token = token;
      window.localStorage.setItem("vernal_token", token);
      return;
    }

    case "logout": {
      state.auth.token = null;
      window.localStorage.removeItem("vernal_token");
      state.currentUser = {};
      window.localStorage.removeItem("vernal_user");
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

    case "toggleCheckbox": {
      const name = action.payload;

      state.ui.checkboxes[name] = !state.ui.checkboxes[name];
      return;
    }

    case "query": {
      state.ui.inputs.search.query = action.payload;
      return;
    }

    case "toggleFocused": {
      state.ui.inputs.search.isFocused = !state.ui.inputs.search.isFocused;
      return;
    }

    case "tagsSliderOffsetLeft": {
      state.ui.scrollbars.tagsSlider.offsetLeft = action.payload;
      return;
    }

    default:
      return;
  }
}
