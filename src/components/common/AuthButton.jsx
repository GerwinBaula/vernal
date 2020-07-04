import React from "react";
import { css } from "@emotion/core";

function AuthButton({ loggedInStatus, onLogin, onLogout }) {
  return (
    <span
      onClick={() => (!loggedInStatus ? onLogin() : onLogout())}
      className="ml-2 py-2 px-4"
      css={css`
        border: 1px solid var(--text-primary);
        border-radius: 50px;
        color: var(--text-primary);
        background-color: var(--bg-primary);
        cursor: pointer;

        &:hover {
          background-color: var(--text-primary);
          color: var(--bg-primary);
        }
      `}
    >
      {!loggedInStatus ? "Login" : "Logout"}
    </span>
  );
}

export default AuthButton;
