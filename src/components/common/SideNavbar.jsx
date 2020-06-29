import React, { useContext, useState } from "react";
import { StateContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import { css } from "@emotion/core";
import SideNavbarList from "./SideNavbarList";

function SideNavbar() {
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);
  const [checked, setChecked] = useState(false);

  return (
    <>
      {loggedInStatus && (
        <nav>
          <input
            type="checkbox"
            className="d-none"
            id="toggle-sidenav"
            checked={checked}
            onChange={() => setChecked(!checked)}
            css={css`
              &:checked ~ label {
                width: var(--sidenav-offset-hovered);

                @media (max-width: 575px) {
                  width: 100vw;
                }
              }

              &:checked ~ label > ul > li > a > span {
                display: flex !important;

                @media (max-width: 575px) {
                  display: none !important;
                }
              }

              &:checked ~ label > ul > li > span {
                background-color: var(--sidenav-bg-hovered);
              }

              &:checked ~ label > ul > li > span > div {
                transform: rotate(-180deg);
              }

              &:checked
                ~ label
                > ul
                > li
                > span
                > div
                > ion-icon:first-of-type {
                color: var(--sidenav-icon-darker-hovered);
              }

              &:checked ~ label > ul > li > span > div > ion-icon:last-child {
                color: var(--sidenav-icon-lighter-hovered);
              }

              &:checked ~ label > ul > li > span > span {
                opacity: 1;
                color: var(--sidenav-text-hovered);
              }
            `}
          />
          <label
            htmlFor="toggle-sidenav"
            className="overflow-hidden m-0"
            onMouseLeave={() => setChecked(false)}
            css={css`
              position: fixed;
              width: var(--sidenav-offset-hovered);
              height: calc(100vh - 66px);

              background-color: var(--sidenav-bg);
              z-index: 99;
              transition: var(--transition-speed);

              @media (max-width: 1200px) {
                width: var(--sidenav-offset);

                height: 100vh;
                transform: translateY(-66px);
              }

              @media (max-width: 575px) {
                bottom: 0;
                width: 100vw;
                height: var(--sidenav-offset-mobile);
                transform: translateY(0px);

                overflow: auto !important;
              }
            `}
          >
            <SideNavbarList />
          </label>
        </nav>
      )}
    </>
  );
}

export default SideNavbar;
