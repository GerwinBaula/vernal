import React from "react";
import { css } from "@emotion/core";

function Name({ isLoggedIn }) {
  return (
    <a
      href="/"
      className={
        !isLoggedIn
          ? "pl-0 mx-4 mx-lg-3 mx-xl-2"
          : "mx-4 mx-sm-5 px-0 px-xl-4 d-block d-sm-none d-xl-block"
      }
    >
      <h3
        className={!isLoggedIn ? "mb-0" : "mb-0 ml-2"}
        css={css`
          color: var(--text-primary);
        `}
      >
        Vernal
      </h3>
    </a>
  );
}

export default Name;
