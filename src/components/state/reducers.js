export default function (state, action) {
  switch (action.type) {
    case "tagsRequest": {
      state.entities.tags.isLoading = true;
      return;
    }

    case "tagsReceived": {
      const tags = action.payload;
      state.entities.tags.list = tags;
      state.entities.tags.isLoading = false;
      state.entities.tags.lastFetch = Date.now();
      return;
    }

    case "tagsRequestFailed": {
      const errorMessage = action.payload;
      console.error(errorMessage);
      return;
    }

    case "galleryRequest": {
      state.entities.gallery.isLoading = true;
      return;
    }

    case "galleryReceived": {
      const gallery = action.payload;
      state.entities.gallery.list = gallery;
      state.entities.gallery.isLoading = false;
      state.entities.gallery.lastFetch = Date.now();
      return;
    }

    case "galleryRequestFailed": {
      const errorMessage = action.payload;
      console.error(errorMessage);
      return;
    }

    case "tagsSliderOffsetLeft": {
      state.scrollbars.tagsSlider.offsetLeft = action.payload;
      return;
    }

    default:
      return;
  }
}
