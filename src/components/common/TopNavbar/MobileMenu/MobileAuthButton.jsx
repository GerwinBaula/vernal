import React from "react";
import { css } from "@emotion/core";

function MobileAuthButton({ onLinkChange }) {
  return (
    <span
      onClick={() => onLinkChange("/login")}
      className="py-2 px-4 d-block d-block d-sm-none"
      css={css`
        border: 1px solid var(--text-primary);
        border-radius: 50px;
        color: var(--text-primary);
        background-color: var(--bg-primary);

        &:hover {
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}
    >
      Login
    </span>
  );
}

export default MobileAuthButton;
