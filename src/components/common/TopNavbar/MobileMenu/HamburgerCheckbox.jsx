import React from "react";
import { css } from "@emotion/core";

function HamburgerCheckbox({ checked, onCheckedChange }) {
  const inputStyle = css`
    &:checked ~ .hamburger {
      background-color: var(--bg-primary);
    }

    &:checked ~ .hamburger::before {
      transform: rotate(45deg);
    }

    &:checked ~ .hamburger::after {
      transform: rotate(-45deg);
    }

    &:checked ~ .mobile-menu {
      opacity: 1;
      left: -215px;
    }
  `;

  return (
    <input
      type="checkbox"
      className="d-none"
      id="toggle-hamburger"
      checked={checked}
      onChange={() => onCheckedChange(!checked)}
      css={inputStyle}
    />
  );
}

export default HamburgerCheckbox;
