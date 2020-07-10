export default {
  entities: {
    results: [],
    tags: {
      list: [],
      lastFetch: null,
    },
  },
  auth: {
    token: window.localStorage.getItem("imgur_token"),
    user: JSON.parse(window.localStorage.getItem("current_user")) || {},
  },
  ui: {
    theme: window.localStorage.getItem("vernal_theme") || "dark",
    checkboxes: {
      mobile: false,
      sidenav: false,
    },
    inputs: {
      search: {
        query: "",
        isFocused: false,
      },
    },
    scrollbars: {
      tagsSlider: {
        offsetLeft: 0,
      },
    },
  },
  apiCallsInProgress: 0,
};
