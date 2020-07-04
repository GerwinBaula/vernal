import React from "react";
import { css } from "@emotion/core";
import { useHistory } from "react-router-dom";

function SearchInput({
  query,
  results,
  onInputChange,
  isFocused,
  onFocusChange,
  onSearch,
}) {
  const history = useHistory();

  const inputStyle = css`
    border-radius: 50px 0 0 50px;
    border: 1px solid var(--text-primary);
    border-right: none;
    outline: none;
    background-color: var(--bg-primary);
    color: var(--text-primary);

    &::placeholder {
      color: var(--text-primary);
    }
  `;

  const buttonStyle = css`
    border-radius: 0 50px 50px 0;
    border: 1px solid var(--text-primary);
    background-color: var(--bg-primary);
    border-left: none;
    color: var(--text-primary);
    font-size: 18px;

    &:focus {
      outline: none;
    }

    &:hover {
      color: var(--text-primary);
    }
  `;

  const listStyle = css`
    top: 38px;
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
    <form onSubmit={onSearch} className="row position-relative">
      <div className="col px-0">
        <input
          type="text"
          className="w-100 py-2 pl-4"
          placeholder="Search some images... or memes."
          value={query}
          onChange={onInputChange}
          css={inputStyle}
          onFocus={onFocusChange}
          onBlur={onFocusChange}
        />
      </div>
      <div className="px-0 d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="h-100 d-flex align-items-center pr-3"
          css={buttonStyle}
        >
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
      {!results.length || !isFocused || (
        <ul className="list-group position-absolute w-100" css={listStyle}>
          {results.map((result) => (
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

export default SearchInput;
