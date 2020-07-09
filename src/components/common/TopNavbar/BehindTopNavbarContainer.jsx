import React from "react";
import { css } from "@emotion/core";

function BehindTopNavbarContainer() {
  return (
    <div
      css={css`
        height: 65px;

        @media (max-width: 575px) {
          height: 64px;
        }
      `}
    ></div>
  );
}

export default BehindTopNavbarContainer;
