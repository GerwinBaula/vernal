import React from "react";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";

function HamburgerList({ links }) {
  return (
    <div
      className="px-3 py-1"
      css={css`
        border-top: 1px solid var(--mobile-sidebar-border);
      `}
    >
      <div className="row">
        {links.map((link) => (
          <Link
            key={link.text}
            to={link.route}
            className="col-sm py-2 d-flex align-items-center"
            css={css`
              ion-icon {
                margin-left: 8px;
                font-size: 26px;
                color: var(--mobile-icon);
              }
            `}
          >
            <ion-icon name={`${link.icon}-outline`}></ion-icon>
            <span
              className="ml-4"
              css={css`
                color: var(--mobile-sidebar-text);
              `}
            >
              {link.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HamburgerList;
