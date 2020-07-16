import React from "react";
import Name from "./DesktopMenu/Name";
import MobileButtons from "./MobileMenu/MobileButtons";
import DesktopSearchInput from "./DesktopMenu/DesktopSearchInput";
import DesktopButtons from "./DesktopMenu/DesktopButtons";
import MobileSearchInput from "./MobileMenu/MobileSearchInput";

function TopNavbarContents(props) {
  return (
    <div
      className={`container-xl d-flex align-items-center justify-content-between ${
        !props.isLoggedIn ? "px-2" : "pl-0 pr-2"
      }`}
    >
      <MobileSearchInput
        query={props.query}
        results={props.results}
        resultsLoading={props.resultsLoading}
        isFocused={props.isFocused}
        onInputChange={props.onInputChange}
        onSearch={props.onSearch}
        onFocusChange={props.onFocusChange}
      />
      <Name isLoggedIn={props.isLoggedIn} />
      <MobileButtons
        isLoggedIn={props.isLoggedIn}
        onLinkChange={props.onLinkChange}
        user={props.user}
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
        firstSetOfLinks={props.firstSetOfLinks}
        secondSetOfLinks={props.secondSetOfLinks}
      />
      <DesktopSearchInput
        isLoggedIn={props.isLoggedIn}
        query={props.query}
        results={props.results}
        resultsLoading={props.resultsLoading}
        onInputChange={props.onInputChange}
        onSearch={props.onSearch}
        isFocused={props.isFocused}
        onFocusChange={props.onFocusChange}
      />
      <DesktopButtons
        isLoggedIn={props.isLoggedIn}
        onLinkChange={props.onLinkChange}
      />
    </div>
  );
}

export default TopNavbarContents;
