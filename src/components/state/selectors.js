export default {
  getResults: (state) => state.entities.results.list,
  getResultsLoadingStatus: (state) => state.entities.results.isLoading,
  getTags: (state) => state.entities.tags.list,
  getTagsLoadingState: (state) => state.entities.tags.isLoading,
  getTagsLastFetch: (state) => state.entities.tags.lastFetch,
  getGallery: (state) => state.entities.gallery.list,
  getGalleryLoadingState: (state) => state.entities.gallery.isLoading,
  getGalleryLastFetch: (state) => state.entities.gallery.lastFetch,

  getTagsSliderOffsetLeft: (state) => state.scrollbars.tagsSlider.offsetLeft,
};
