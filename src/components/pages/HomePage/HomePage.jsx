import React, { useRef, useContext, useEffect } from "react";
import { css } from "@emotion/core";
import { StateContext } from "../../state/contexts";
import selectors from "../../state/selectors";

function HomePage() {
  const state = useContext(StateContext);
  const loggedInStatus = selectors.getLoggedInStatus(state);
  const slider = useRef();
  let isDown;
  let startX;
  let scrollLeft;

  function handleSliderDown(e) {
    isDown = true;
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  }

  function handleSliderUp() {
    isDown = false;
  }

  function handleSliderLeave() {
    isDown = false;
  }

  function handleSliderMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const speed = 1.2;
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * speed;
    slider.current.scrollLeft = scrollLeft - walk;
  }

  function handleMobileSliderDown(e) {
    isDown = true;
    startX = e.changedTouches[0].pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  }

  function handleMobileSliderUp() {
    isDown = false;
  }

  function handleMobileSliderMove(e) {
    if (!isDown) return;
    const speed = 1.2;
    const x = e.changedTouches[0].pageX - slider.current.offsetLeft;
    const walk = (x - startX) * speed;
    slider.current.scrollLeft = scrollLeft - walk;
  }

  useEffect(() => {}, []);

  return (
    <div
      className={`container-fluid ${
        !loggedInStatus ? "p-0 pt-4" : "pl-4 pt-4 pr-0"
      }`}
    >
      <div className="container pl-0 pr-3 pr-xl-0 mb-2 d-flex justify-content-between align-items-center">
        <h4 className="m-0">Tags</h4>
        <div className="d-flex align-items-center">
          <span className="mr-1">SEE ALL</span>
          <span
            className="position-relative"
            css={css`
              top: -1px;
            `}
          >
            &#8594;
          </span>
        </div>
      </div>
      <ul
        className="list-unstyled m-0 pr-3 pr-xl-0"
        ref={slider}
        onMouseDown={handleSliderDown}
        onMouseUp={handleSliderUp}
        onMouseLeave={handleSliderLeave}
        onMouseMove={handleSliderMove}
        onTouchStart={handleMobileSliderDown}
        onTouchEnd={handleMobileSliderUp}
        onTouchMove={handleMobileSliderMove}
        css={css`
          white-space: nowrap;
          height: 130px;
          overflow: hidden;
          cursor: grabbing;

          li:nth-of-type(4n + 1) {
            background: var(--text-primary);
          }

          li:nth-of-type(4n + 2) {
            background: var(--text-secondary);
          }

          li:nth-of-type(4n + 3) {
            background: var(--bg-primary);
          }

          li:nth-of-type(4n + 4) {
            background: var(--bg-secondary);
          }
        `}
      >
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex mr-3"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
        <li
          className="d-inline-flex"
          css={css`
            height: 100%;
            width: 130px;
            white-space: normal;
          `}
        ></li>
      </ul>
    </div>
  );
}

export default HomePage;
