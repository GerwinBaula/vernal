export default {
  entities: {
    results: {
      list: [],
      isLoading: null,
    },
    tags: {
      list: [],
      isLoading: null,
      lastFetch: null,
    },
  },
  auth: {
    token: window.localStorage.getItem("vernal_token"),
    user: JSON.parse(window.localStorage.getItem("vernal_user")) || {},
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
};
