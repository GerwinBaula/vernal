import React from "react";
import SearchInput from "./SearchInput";

function DesktopSearchInput({
  loggedInStatus,
  query,
  results,
  onInputChange,
  onSearch,
  isFocused,
  onFocusChange,
}) {
  return (
    <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
      <div
        css={{
          width: `${!loggedInStatus ? "60%" : "75%"}`,
        }}
      >
        <SearchInput
          query={query}
          results={results}
          onInputChange={onInputChange}
          onSearch={onSearch}
          isFocused={isFocused}
          onFocusChange={onFocusChange}
        />
      </div>
    </div>
  );
}

export default DesktopSearchInput;
