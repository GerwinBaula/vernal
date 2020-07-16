import React from "react";
import SearchInput from "./SearchInput";

function DesktopSearchInput(props) {
  return (
    <div className="flex-fill mx-2 mx-lg-4 px-0 px-lg-2 d-none d-sm-flex justify-content-center">
      <div
        css={{
          width: `${!props.isLoggedIn ? "60%" : "75%"}`,
        }}
      >
        <SearchInput
          query={props.query}
          results={props.results}
          resultsLoading={props.resultsLoading}
          onInputChange={props.onInputChange}
          onSearch={props.onSearch}
          isFocused={props.isFocused}
          onFocusChange={props.onFocusChange}
        />
      </div>
    </div>
  );
}

export default DesktopSearchInput;
