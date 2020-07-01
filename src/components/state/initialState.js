export default {
  auth: {
    token: window.localStorage.getItem("imgur_token"),
  },
  currentUser: JSON.parse(window.localStorage.getItem("current_user")) || {},
  ui: {
    theme: window.localStorage.getItem("vernal_theme") || "dark",
  },
  apiCallsInProgress: 0,
};
