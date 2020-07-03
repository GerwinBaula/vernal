export const getLoggedInStatus = (state) => !!state.auth.token;
export const getCurrentUser = (state) => state.auth.user;
export const getCurrentTheme = (state) => state.ui.theme;
export const getCheckbox = (state, name) => state.ui.checkboxes[name];
export const getQuery = (state) => state.ui.query;
export const getResults = (state) => state.entities.results;
