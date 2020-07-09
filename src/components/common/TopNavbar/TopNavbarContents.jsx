import React from "react";
import Name from "./DesktopMenu/Name";
import MobileButtons from "./MobileMenu/MobileButtons";
import DesktopSearchInput from "./DesktopMenu/DesktopSearchInput";
import DesktopButtons from "./DesktopMenu/DesktopButtons";
import MobileSearchInput from "./MobileMenu/MobileSearchInput";

function TopNavbarContents({
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
  return (
    <div className="container-xl p-0 d-flex align-items-center justify-content-between">
      <MobileSearchInput
        query={query}
        results={results}
        onInputChange={onInputChange}
        onSearch={onSearch}
        isFocused={isFocused}
        onFocusChange={onFocusChange}
      />
      <Name loggedInStatus={loggedInStatus} />
      <MobileButtons loggedInStatus={loggedInStatus} onLogin={onLogin} />
      <DesktopSearchInput
        loggedInStatus={loggedInStatus}
        query={query}
        results={results}
        onInputChange={onInputChange}
        onSearch={onSearch}
        isFocused={isFocused}
        onFocusChange={onFocusChange}
      />
      <DesktopButtons
        loggedInStatus={loggedInStatus}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </div>
  );
}

export default TopNavbarContents;
