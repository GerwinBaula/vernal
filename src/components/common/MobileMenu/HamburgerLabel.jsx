import React from "react";
import { css } from "@emotion/core";

function HamburgerLabel({ onCheckedChange }) {
  const labelStyle = css`
    width: 30px;
    height: 4px;
    background: var(--text-primary);
    border-radius: 5px;
    transition: var(--transition-speed);
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 30px;
        height 4px;
        background: var(--text-primary);
        border-radius: 5px;
        transition: var(--transition-speed);
    }

    &::before {
        transform: translateY(-9px);
    }

    &::after {
        transform: translateY(9px);
    }
    `;

  return (
    <label
      htmlFor="toggle-hamburger"
      className="mt-3 hamburger"
      onMouseLeave={() => onCheckedChange(false)}
      css={labelStyle}
    />
  );
}

export default HamburgerLabel;
