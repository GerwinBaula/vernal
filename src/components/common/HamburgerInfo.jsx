import React from "react";
import { css } from "@emotion/core";

function HamburgerInfo({ username, bio, avatar }) {
  return (
    <div className="d-flex align-items-center p-3">
      <div className="mr-3">
        <div
          css={{
            height: "40px",
            width: "40px",
            border: "1px solid var(--avatar-border)",
            borderRadius: "50px",
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="flex-fill p-0 d-flex flex-column justify-content-center align-items-start">
        <h5
          className="m-0"
          css={css`
            color: var(--mobile-sidebar-text);
          `}
        >
          {username}
        </h5>
        <p
          className="m-0"
          css={css`
            color: var(--mobile-sidebar-text);
          `}
        >
          {bio}
        </p>
      </div>
    </div>
  );
}

export default HamburgerInfo;
