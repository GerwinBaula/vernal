import React from "react";
// below comment line is required
// it tells babel how to convert properly
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { css } from "@emotion/core";

function App() {
  return (
    <>
      <nav className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="bg-danger">col</div>
            <div className="col bg-secondary mx-4">col</div>
            <div
              className=""
              css={css`
                color: red;
              `}
            >
              text
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
