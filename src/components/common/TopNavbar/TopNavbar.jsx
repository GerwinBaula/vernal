import React from "react";
import BehindTopNavbarContainer from "./BehindTopNavbarContainer";
import TopNavbarContainer from "./TopNavbarContainer";
import useCheckbox from "../../customHooks/useCheckbox";
import useSearch from "../../customHooks/useSearch";
import useLink from "../../customHooks/useLink";

function TopNavbar({ isLoggedIn, user }) {
  const [checked, handleCheckedChange] = useCheckbox();
  const [firstSetOfLinks, secondSetOfLinks, handleLinkChange] = useLink();
  const [
    query,
    results,
    isFocused,
    isLoading,
    handleInputChange,
    handleSubmit,
    handleFocusChange,
  ] = useSearch();

  return (
    <>
      <TopNavbarContainer
        query={query}
        results={results}
        resultsLoading={isLoading}
        onInputChange={handleInputChange}
        onSearch={handleSubmit}
        isFocused={isFocused}
        onFocusChange={handleFocusChange}
        isLoggedIn={isLoggedIn}
        onLinkChange={handleLinkChange}
        user={user}
        checked={checked}
        onCheckedChange={handleCheckedChange}
        firstSetOfLinks={firstSetOfLinks}
        secondSetOfLinks={secondSetOfLinks}
      />
      <BehindTopNavbarContainer />
    </>
  );
}

export default TopNavbar;
