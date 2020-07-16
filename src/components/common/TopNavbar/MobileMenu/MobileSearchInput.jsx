import React from "react";
import { css } from "@emotion/core";
import { useHistory } from "react-router-dom";
import TopNavbarLoading from "../TopNavbarLoading";

function MobileSearchInput(props) {
  const history = useHistory();

  const formStyle = css`
    border: 1px solid var(--text-primary);
    border-radius: 50px;
  `;

  const inputStyle = css`
    border: none;
    border-radius: 0 50px 50px 0;
    outline: none;
    background-color: var(--bg-primary);
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-primary);
    }
  `;

  const buttonStyle = css`
      border-radius: 50px 0 0 50px;
      background-color: var(--bg-primary);
      border: 1px solid var(--bg-primary)
      border-right: none;
      color: var(--text-primary);
      font-size: 20px;

      &:focus {
      outline: none;
      }
  `;

  const listStyle = css`
    top: 36px;
    box-shadow: 0px 0.5px 3px 0px var(--text-primary-color);
    cursor: pointer;

    & > * {
      background-color: var(--bg-primary);
      color: var(--text-primary);
    }
  `;

  const itemStyle = css`
    border-color: var(--text-primary);
  `;

  return (
    <form
      onSubmit={props.onSearch}
      className="d-flex flex-fill d-sm-none position-relative"
      css={formStyle}
    >
      <button
        type="submit"
        className="m-0 pl-2 py-2 pr-1 d-flex justify-content-center align-items-center"
        css={buttonStyle}
      >
        {!props.resultsLoading ? (
          <ion-icon name="search-outline"></ion-icon>
        ) : (
          <TopNavbarLoading />
        )}
      </button>
      <input
        type="text"
        className="w-100 mr-3 pl-1"
        placeholder="Search some images... or memes."
        value={props.query}
        onChange={props.onInputChange}
        onFocus={() => props.onFocusChange(true)}
        onBlur={() => props.onFocusChange(false)}
        css={inputStyle}
      />
      {!props.results.length || !props.isFocused || (
        <ul className="list-group position-absolute w-100" css={listStyle}>
          {props.results.map((result) => (
            <li
              onMouseDown={() => history.push(`/image/${result.id}`)}
              key={result.datetime}
              className="list-group-item py-2 px-3"
              css={itemStyle}
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default MobileSearchInput;
