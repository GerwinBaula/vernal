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
  theme: window.localStorage.getItem("vernal_theme") || "dark",
  scrollbars: {
    tagsSlider: {
      offsetLeft: 0,
    },
  },
};
