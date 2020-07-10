export default {
  getLoggedInStatus: (state) => !!state.auth.token,
  getCurrentUser: (state) => state.auth.user,
  getCurrentTheme: (state) => state.ui.theme,
  getCheckbox: (state, name) => state.ui.checkboxes[name],
  getQuery: (state) => state.ui.inputs.search.query,
  getSearchInputState: (state) => state.ui.inputs.search.isFocused,
  getResults: (state) => state.entities.results,
  getTags: (state) => state.entities.tags,
  getTagsSliderOffsetLeft: (state) => state.ui.scrollbars.tagsSlider.offsetLeft,
};
