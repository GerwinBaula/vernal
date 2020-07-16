import React, { useContext, useEffect } from "react";
import { StateContext, DispatchContext } from "../../state/contexts";
import selectors from "../../state/selectors";
import { css } from "@emotion/core";
import httpService from "../../services/httpService";
import moment from "moment";
import { useHistory } from "react-router-dom";

function TagsPage({ isLoggedIn }) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();
  // const loggedInStatus = selectors.getLoggedInStatus(state);
  const tags = selectors.getTags(state).slice(0, 100);
  const tagsLoading = selectors.getTagsLoadingState(state);
  const tagsLastFetch = selectors.getTagsLastFetch(state);

  useEffect(() => {
    async function loadTags() {
      try {
        const refetchAgainMinutes = 10;
        const diffInMinutes = moment().diff(moment(tagsLastFetch), "minutes");
        if (diffInMinutes < refetchAgainMinutes) return;

        dispatch({ type: "tagsRequest" });

        const { data } = await httpService.get(`https://api.imgur.com/3/tags`);
        const { data: anotherData } = data;
        const { tags } = anotherData;

        return dispatch({ type: "tagsReceived", payload: tags });
      } catch (error) {
        dispatch({ type: "tagsRequestFailed", payload: error.message });
      }
    }

    loadTags();
  }, [dispatch, tagsLastFetch]);

  return (
    <div
      className={`container-fluid d-flex flex-column ${
        !isLoggedIn ? "pt-4 px-3 px-xl-0" : "pt-4 pr-3 pr-xl-0"
      }`}
    >
      <div className="mb-2 mx-2">
        <h4 className="m-0">All Tags</h4>
      </div>

      <ul
        className="list-unstyled d-flex flex-wrap"
        css={css`
          li:nth-of-type(10n + 1) {
            background: var(--fourth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 2) {
            background: var(--fourteenth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 3) {
            background: var(--fifth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 4) {
            background: var(--fifteenth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 5) {
            background: var(--sixth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 6) {
            background: var(--sixteenth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 7) {
            background: var(--seventh);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 8) {
            background: var(--seventeenth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 9) {
            background: var(--eighth);
            color: var(--text-quaternary);
          }

          li:nth-of-type(10n + 10) {
            background: var(--eighteenth);
            color: var(--text-quaternary);
          }
        `}
      >
        {!tagsLoading ? (
          tags.map((tag) => (
            <li
              onClick={() => history.push(`/tag/${tag.display_name}`)}
              key={tag.display_name}
              className="flex-fill m-2"
              css={css`
                height: 150px;
                width: 150px;
                border-radius: 1px;
                word-break: break-word;
                cursor: pointer;
              `}
            >
              <div
                className="px-2 w-100"
                css={css`
                  font-size: 20px;
                  min-height: 20px;

                  @media (max-width: 575px) {
                    font-size: 22px;
                  }
                `}
              >
                {tag.display_name}
              </div>
            </li>
          ))
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
      </ul>
    </div>
  );
}

export default TagsPage;
