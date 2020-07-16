import React from "react";
import { css } from "@emotion/core";

function HamburgerList({ links, onLinkChange }) {
  const containerBorder = css`
    border-top: 1px solid var(--text-primary);
  `;
  const linkStyle = css`
    ion-icon {
      margin-left: 8px;
      font-size: 26px;
      color: var(--text-primary);
    }
  `;
  const linkTextStyle = css`
    color: var(--text-primary);
  `;

  return (
    <div className="px-3 py-1" css={containerBorder}>
      <div className="row">
        {links.map((link) => (
          <li
            key={link.text}
            onClick={() => onLinkChange(link.route)}
            className="col-sm py-2 d-flex align-items-center"
            css={linkStyle}
          >
            <ion-icon name={`${link.icon}-outline`}></ion-icon>
            <span className="ml-4" css={linkTextStyle}>
              {link.text}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default HamburgerList;
