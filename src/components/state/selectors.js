export default {
  getLoggedInStatus: (state) => !!state.auth.token,
  getCurrentUser: (state) => state.auth.user,
  getCurrentTheme: (state) => state.ui.theme,
  getCheckbox: (state, name) => state.ui.checkboxes[name],
  getQuery: (state) => state.ui.searchInput.query,
  getSearchInputState: (state) => state.ui.searchInput.isFocused,
  getResults: (state) => state.entities.results,
};
