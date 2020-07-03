export default {
  entities: {
    results: [],
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
    query: "",
  },
  apiCallsInProgress: 0,
};
