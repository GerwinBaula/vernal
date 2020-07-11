export default {
  getResults: (state) => state.entities.results.list,
  getResultsLoadingStatus: (state) => state.entities.results.isLoading,
  getTags: (state) => state.entities.tags.list,
  getTagsLoadingState: (state) => state.entities.tags.isLoading,
  getTagsLastFetch: (state) => state.entities.tags.lastFetch,

  getLoggedInStatus: (state) => !!state.auth.token,
  getCurrentUser: (state) => state.auth.user,

  getCurrentTheme: (state) => state.ui.theme,
  getCheckbox: (state, name) => state.ui.checkboxes[name],
  getQuery: (state) => state.ui.inputs.search.query,
  getSearchInputState: (state) => state.ui.inputs.search.isFocused,
  getTagsSliderOffsetLeft: (state) => state.ui.scrollbars.tagsSlider.offsetLeft,
};
