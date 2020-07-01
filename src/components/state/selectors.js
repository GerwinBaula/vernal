export const getLoggedInStatus = (state) => !!state.auth.token;
export const getCurrentUser = (state) => state.currentUser;
export const getCurrentTheme = (state) => state.ui.theme;
