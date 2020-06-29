import React from "react";
import { css } from "@emotion/core";

function Hamburger({ checked, onCheckedChange }) {
  return (
    <>
      <input
        type="checkbox"
        className="d-none"
        id="toggle-hamburger"
        checked={checked}
        onChange={() => onCheckedChange(!checked)}
        css={css`
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
        `}
      />
      <label
        htmlFor="toggle-hamburger"
        className="mt-3 hamburger"
        onMouseLeave={() => onCheckedChange(false)}
        css={css`
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
        `}
      />
    </>
  );
}

export default Hamburger;
