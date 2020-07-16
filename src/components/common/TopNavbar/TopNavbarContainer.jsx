import React from "react";
import TopNavbarContents from "./TopNavbarContents";

function TopNavbarContainer(props) {
  const topNavbarStyle = {
    backgroundColor: "var(--bg-primary)",
    borderBottom: "var(--bg-primary)",
    zIndex: "99",
    "@media (max-width: 1200px)": {
      marginLeft: `${!props.isLoggedIn ? "0px" : "94px"}`,
      width: `${!props.isLoggedIn ? "100vw" : "calc(100vw - 94px)"}`,
    },
    "@media (max-width: 575px)": {
      marginLeft: "0px",
      width: "100vw",
    },
  };

  return (
    <nav className="container-fluid py-3 position-fixed" css={topNavbarStyle}>
      <TopNavbarContents
        query={props.query}
        results={props.results}
        resultsLoading={props.resultsLoading}
        onInputChange={props.onInputChange}
        onSearch={props.onSearch}
        isFocused={props.isFocused}
        onFocusChange={props.onFocusChange}
        isLoggedIn={props.isLoggedIn}
        onLinkChange={props.onLinkChange}
        user={props.user}
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
        firstSetOfLinks={props.firstSetOfLinks}
        secondSetOfLinks={props.secondSetOfLinks}
      />
    </nav>
  );
}

export default TopNavbarContainer;
