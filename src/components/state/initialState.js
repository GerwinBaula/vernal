export default {
  auth: {
    token: window.localStorage.getItem("imgur_token"),
  },
  currentUser: JSON.parse(window.localStorage.getItem("current_user")) || {},
  apiCallsInProgress: 0,
};
