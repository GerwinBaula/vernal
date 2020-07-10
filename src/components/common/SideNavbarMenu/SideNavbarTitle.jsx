import React from "react";
import { css } from "@emotion/core";

function SideNavbarTitle({ item }) {
  const containerStyle = css`
    height: 66px;
    padding: 0 16px;
    color: var(--bg-primary);
    background-color: var(--text-primary);
    transition: var(--transition-speed);

    &:hover {
      background-color: var(--text-primary);
      color: var(--bg-primary);
    }

    @media (max-width: 575px) {
      height: 64px;
    }

    div {
      display: flex;

      ion-icon:first-of-type {
        font-size: 30px;
        color: var(--text-secondary);
        transform: translateX(10px);
      }

      ion-icon:last-child {
        font-size: 30px;
        color: var(--bg-secondary);
        transform: translateX(-10px);
      }

      @media (max-width: 575px) {
        font-size: 26px;
      }
    }
  `;

  const titleStyle = css`
    font-size: 20px;
    color: var(--bg-primary);
    opacity: 0;
  `;

  const iconTransition = css`
    transition: var(--transition-speed);
  `;

  return (
    <>
      <span
        className="d-flex align-items-center justify-content-end"
        css={containerStyle}
      >
        <span className="mr-2" css={titleStyle}>
          {item.title}
        </span>
        <div css={iconTransition}>
          <ion-icon name={`${item.icon}-outline`}></ion-icon>
          <ion-icon name={`${item.icon}-outline`}></ion-icon>
        </div>
      </span>
    </>
  );
}

export default SideNavbarTitle;
