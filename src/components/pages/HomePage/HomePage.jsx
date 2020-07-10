import React, { useRef, useContext, useEffect, useCallback } from "react";
import { css } from "@emotion/core";
import { StateContext, DispatchContext } from "../../state/contexts";
import selectors from "../../state/selectors";
import httpService from "../../services/httpService";
import _ from "lodash";

// Add Caching
function HomePage() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const loggedInStatus = selectors.getLoggedInStatus(state);
  const tagsSliderOffsetLeft = selectors.getTagsSliderOffsetLeft(state);
  const tags = selectors.getTags(state);

  const slider = useRef();

  let isDown;
  let startX;
  let scrollLeft;
  let walk;

  const debounceSliderMove = useCallback(
    _.debounce((offsetLeft) => {
      dispatch({ type: "tagsSliderOffsetLeft", payload: offsetLeft });
    }, 50),
    []
  );

  function handleSliderDown(e) {
    isDown = true;
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  }

  function handleSliderMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const speed = 1.4;
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * speed;
    slider.current.scrollLeft = scrollLeft - walk;
    debounceSliderMove(scrollLeft - walk);
  }

  function handleMobileSliderDown(e) {
    isDown = true;
    startX = e.changedTouches[0].pageX - slider.current.offsetLeft;
  }

  function handleMobileSliderMove(e) {
    if (!isDown) return;
    const speed = 1.4;
    const x = e.changedTouches[0].pageX - slider.current.offsetLeft;
    walk = (x - startX) * speed;
    slider.current.scrollLeft = scrollLeft - walk;
    debounceSliderMove(scrollLeft - walk);
  }

  useEffect(() => {
    slider.current.scrollLeft = tagsSliderOffsetLeft;
  }, [tagsSliderOffsetLeft]);

  useEffect(() => {
    async function loadTags() {
      try {
        // Condition for caching
        dispatch({ type: "apiCallBegan" });

        const { data } = await httpService.get(`https://api.imgur.com/3/tags`);
        const { data: anotherData } = data;
        const { tags } = anotherData;

        return dispatch({ type: "getTagsSuccess", payload: tags });
      } catch (error) {
        dispatch({ type: "apiCallFailed" });
      }
    }

    loadTags();
  }, [dispatch]);

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
        onMouseUp={() => (isDown = false)}
        onMouseLeave={() => (isDown = false)}
        onMouseMove={handleSliderMove}
        onTouchStart={handleMobileSliderDown}
        onTouchEnd={() => (isDown = false)}
        onTouchMove={handleMobileSliderMove}
        css={css`
          white-space: nowrap;
          height: 140px;
          overflow: hidden;
          cursor: grabbing;

          li:nth-of-type(4n + 1) {
            background: var(--text-primary);
            color: var(--white);
          }

          li:nth-of-type(4n + 2) {
            background: var(--text-secondary);
            color: var(--white);
          }

          li:nth-of-type(4n + 3) {
            background: var(--bg-primary);
            color: var(--white);
          }

          li:nth-of-type(4n + 4) {
            background: var(--bg-secondary);
            color: var(--white);
          }
        `}
      >
        {tags.list.map((tag) => (
          <li
            className="d-inline-flex flex-column justify-content-start align-items-center mr-3 position-relative"
            css={css`
              height: 100%;
              width: 140px;
              white-space: normal;
              border-radius: 1px;
            `}
          >
            <div
              className="text-center mt-4 pt-1"
              css={css`
                min-height: 60px;
                max-width: 100px;
                font-size: 20px;
                word-wrap: break-word;
              `}
            >
              {tag.display_name}
            </div>
            <span
              className="position-absolute text-center"
              css={css`
                bottom: 16px;
                font-size: 12px;
              `}
            >
              {tag.total_items.toString()} posts
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
