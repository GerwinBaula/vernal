import React from "react";
import { css } from "@emotion/core";

function TopNavbarLoading() {
  return (
    <div
      css={css`
        width: 20px;
        height: 20px;

        display: inline-block;
        border: 2px solid var(--bg-primary);
        border-radius: 50%;
        border-top-color: var(--text-primary);
        border-right-color: var(--text-primary);
        animation: spin 2s infinite ease-in-out;

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}
    ></div>
  );
}

export default TopNavbarLoading;
