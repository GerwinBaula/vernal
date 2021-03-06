import React, { useRef, useContext, useEffect, useCallback } from "react";
import { css } from "@emotion/core";
import { StateContext, DispatchContext } from "../../state/contexts";
import selectors from "../../state/selectors";
import httpService from "../../services/httpService";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import moment from "moment";

function HomePage({ isLoggedIn }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const tagsSliderOffsetLeft = selectors.getTagsSliderOffsetLeft(state);
  const tags = selectors.getTags(state);
  const introTags = tags.slice(0, 50);
  const tagsLoading = selectors.getTagsLoadingState(state);
  const tagsLastFetch = selectors.getTagsLastFetch(state);
  const gallery = selectors.getGallery(state);
  const galleryLoading = selectors.getGalleryLoadingState(state);
  const galleryLastFetch = selectors.getGalleryLastFetch(state);

  const slider = useRef();

  let isDown;
  let startX;
  let scrollLeft;
  let walk;
  let downPosition;
  let upPosition;

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
    downPosition = e.pageX;
  }

  function handleSliderUp(e) {
    isDown = false;
    upPosition = e.pageX;
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
    scrollLeft = slider.current.scrollLeft;
    downPosition = e.pageX;
  }

  function handleMobileSliderUp(e) {
    isDown = false;
    upPosition = e.pageX;
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
        const refetchAgainMinutes = 10;
        const tagsDiffInMinutes = moment().diff(
          moment(tagsLastFetch),
          "minutes"
        );
        if (tagsDiffInMinutes < refetchAgainMinutes) return;

        dispatch({ type: "tagsRequest" });

        let { data } = await httpService.get(`https://api.imgur.com/3/tags`);
        let { tags } = data.data;

        dispatch({ type: "tagsReceived", payload: tags });
        return;
      } catch (error) {
        dispatch({ type: "tagsRequestFailed", payload: error.message });
      }
    }

    loadTags();
  }, [dispatch, tagsLastFetch]);

  useEffect(() => {
    async function loadGallery() {
      try {
        const refetchAgainMinutes = 10;
        const galleryDiffInMinutes = moment().diff(
          moment(galleryLastFetch),
          "minutes"
        );
        if (galleryDiffInMinutes < refetchAgainMinutes) return;

        dispatch({ type: "galleryRequest" });

        let data = await httpService.get(
          `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`
        );
        let { data: gallery } = data.data;

        dispatch({ type: "galleryReceived", payload: gallery.slice(0, 20) });
        return;
      } catch (error) {
        dispatch({ type: "galleryRequestFailed", payload: error.message });
      }
    }

    loadGallery();
  }, [dispatch, galleryLastFetch]);

  return (
    <div
      className={`container-fluid d-flex flex-column ${
        !isLoggedIn ? "pt-4 px-3 px-xl-0" : "pt-4 pr-3 pr-xl-0"
      }`}
    >
      {!isLoggedIn && (
        <div
          className="jumbotron px-4 px-md-5 mx-2 mb-3"
          css={css`
            border-radius: 1px;
            background-image: linear-gradient(
              to right,
              var(--bg-primary),
              var(--text-primary)
            );
            color: var(--text-quaternary);

            @media (max-width: 575px) {
              padding-top: 50px;
              padding-bottom: 50px;
            }
          `}
        >
          <h1
            className="lead"
            css={css`
              font-size: 70px;

              @media (max-width: 768px) {
                font-size: 60px;
              }

              @media (max-width: 575px) {
                font-size: 50px;
              }
            `}
          >
            Welcome to Vernal!
          </h1>
          <hr className="my-2" />
          <p
            className="lead"
            css={css`
              word-spacing: 2px;
              font-size: 20px;

              @media (max-width: 768px) {
                font-size: 18px;
              }

              @media (max-width: 575px) {
                font-size: 16px;
              }
            `}
          >
            Bored? We've got your back! Discover spicy memes, pets in sweaters,
            awe-inspiring science facts, video game Easter eggs, and all the
            rest of the Internet’s most entertaining stuff.
          </p>
        </div>
      )}

      <div className="d-flex flex-column mx-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h4 className="m-0">Tags</h4>
          <Link
            to="/tags"
            className="d-flex align-items-center"
            css={css`
              color: var(--bg-primary);

              &:hover {
                color: var(--bg-primary);
              }
            `}
          >
            <span className="mr-1">SEE ALL</span>
            <span
              className="position-relative"
              css={css`
                top: -1px;
              `}
            >
              &#8594;
            </span>
          </Link>
        </div>
        <ul
          className="list-unstyled mx-0 mt-0 mb-4 pr-3 pr-xl-0"
          ref={slider}
          onMouseDown={handleSliderDown}
          onMouseUp={handleSliderUp}
          onMouseLeave={() => (isDown = false)}
          onMouseMove={handleSliderMove}
          onTouchStart={handleMobileSliderDown}
          onTouchEnd={handleMobileSliderUp}
          onTouchMove={handleMobileSliderMove}
          css={css`
            white-space: nowrap;
            height: 140px;
            overflow: hidden;
            cursor: grabbing;

            li:not(:last-child) {
              margin-right: 14px;
            }

            li:nth-of-type(6n + 1) {
              background: var(--text-primary);
              color: var(--text-quaternary);
            }

            li:nth-of-type(6n + 2) {
              background: var(--text-secondary);
              color: var(--text-quaternary);
            }

            li:nth-of-type(6n + 3) {
              background: var(--bg-primary);
              color: var(--text-quaternary);
            }

            li:nth-of-type(6n + 4) {
              background: var(--bg-secondary);
              color: var(--text-quaternary);
            }

            li:nth-of-type(6n + 5) {
              background: var(--text-tertiary);
              color: var(--text-quaternary);
            }

            li:nth-of-type(6n + 6) {
              background: var(--bg-tertiary);
              color: var(--text-quaternary);
            }
          `}
        >
          {!tagsLoading ? (
            introTags.map((tag) => (
              <li
                onClick={() => {
                  if (downPosition === upPosition)
                    return history.push(`/tag/${tag.display_name}`);
                  return;
                }}
                key={tag.display_name}
                className="d-inline-flex flex-column justify-content-start align-items-center position-relative"
                css={css`
                  height: 140px;
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
                    line-height: 25px;
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
            ))
          ) : (
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
              <div
                css={css`
                  width: 20px;
                  height: 20px;
                  background-color: var(--bg-secondary);
                  border-radius: 50%;
                  display: inline-block;
                  animation: bounce 1.5s infinite ease-in-out both;
                  animation-delay: -0.3s;

                  @keyframes bounce {
                    0%,
                    80%,
                    100% {
                      transform: scale(0);
                    }

                    40% {
                      transform: scale(1);
                    }
                  }
                `}
              ></div>
              <div
                className="mx-2"
                css={css`
                  width: 20px;
                  height: 20px;
                  background-color: var(--bg-secondary);
                  border-radius: 50%;
                  display: inline-block;
                  animation: bounce 1.5s infinite ease-in-out both;
                  animation-delay: -0.15s;

                  @keyframes bounce {
                    0%,
                    80%,
                    100% {
                      transform: scale(0);
                    }

                    40% {
                      transform: scale(1);
                    }
                  }
                `}
              ></div>
              <div
                css={css`
                  width: 20px;
                  height: 20px;
                  background-color: var(--bg-secondary);
                  border-radius: 50%;
                  display: inline-block;
                  animation: bounce 1.5s infinite ease-in-out both;

                  @keyframes bounce {
                    0%,
                    80%,
                    100% {
                      transform: scale(0);
                    }

                    40% {
                      transform: scale(1);
                    }
                  }
                `}
              ></div>
            </div>
          )}
        </ul>
      </div>

      <div className="d-flex flex-column">
        <h4 className="mb-0 mx-2">Gallery</h4>
        {!galleryLoading ? (
          <ul
            className="list-unstyled"
            css={{
              columnCount: `${!isLoggedIn ? "4" : "3"}`,
              columnGap: "0px",

              "@media (max-width: 992px)": {
                columnCount: `${!isLoggedIn ? "3" : "2"}`,
              },

              "@media (max-width: 768px)": {
                columnCount: "2",
              },

              "@media (max-width: 575px)": {
                columnCount: "1",
              },
            }}
          >
            {gallery.map((item) => (
              <li
                key={item.id}
                className="p-2"
                css={css`
                  width: 100%;
                `}
              >
                {/* <img
                  css={css`
                    width: 100%;
                  `}
                  src={`https://i.imgur.com/${item.cover || item.id}.jpg`}
                  alt="post-cover"
                /> */}
              </li>
            ))}
          </ul>
        ) : (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            css={css`
              height: 200px;
            `}
          >
            <div
              css={css`
                width: 20px;
                height: 20px;
                background-color: var(--bg-secondary);
                border-radius: 50%;
                display: inline-block;
                animation: bounce 1.5s infinite ease-in-out both;
                animation-delay: -0.3s;

                @keyframes bounce {
                  0%,
                  80%,
                  100% {
                    transform: scale(0);
                  }

                  40% {
                    transform: scale(1);
                  }
                }
              `}
            ></div>
            <div
              className="mx-2"
              css={css`
                width: 20px;
                height: 20px;
                background-color: var(--bg-secondary);
                border-radius: 50%;
                display: inline-block;
                animation: bounce 1.5s infinite ease-in-out both;
                animation-delay: -0.15s;

                @keyframes bounce {
                  0%,
                  80%,
                  100% {
                    transform: scale(0);
                  }

                  40% {
                    transform: scale(1);
                  }
                }
              `}
            ></div>
            <div
              css={css`
                width: 20px;
                height: 20px;
                background-color: var(--bg-secondary);
                border-radius: 50%;
                display: inline-block;
                animation: bounce 1.5s infinite ease-in-out both;

                @keyframes bounce {
                  0%,
                  80%,
                  100% {
                    transform: scale(0);
                  }

                  40% {
                    transform: scale(1);
                  }
                }
              `}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
