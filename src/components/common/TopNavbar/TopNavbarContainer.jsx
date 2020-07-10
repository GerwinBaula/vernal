import React from "react";
import TopNavbarContents from "./TopNavbarContents";

function TopNavbarContainer({
  query,
  results,
  onInputChange,
  onSearch,
  isFocused,
  onFocusChange,
  loggedInStatus,
  onLogin,
  onLogout,
}) {
  const topNavbarStyle = {
    backgroundColor: "var(--bg-primary)",
    borderBottom: "var(--bg-primary)",
    zIndex: "99",
    "@media (max-width: 1200px)": {
      marginLeft: `${!loggedInStatus ? "0px" : "94px"}`,
      width: `${!loggedInStatus ? "100vw" : "calc(100vw - 94px)"}`,
    },
    "@media (max-width: 575px)": {
      marginLeft: "0px",
      width: "100vw",
    },
  };

  return (
    <nav
      className="container-fluid py-3 pl-3 pl-sm-1 pr-3 position-fixed"
      css={topNavbarStyle}
    >
      <TopNavbarContents
        query={query}
        results={results}
        onInputChange={onInputChange}
        onSearch={onSearch}
        isFocused={isFocused}
        onFocusChange={onFocusChange}
        loggedInStatus={loggedInStatus}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </nav>
  );
}

export default TopNavbarContainer;
