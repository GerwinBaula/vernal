import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";

function NewPostButton({ loggedInStatus }) {
  return (
    <>
      {loggedInStatus && (
        <Link
          to="/new-post"
          className="mr-2 py-2 px-3"
          css={css`
            color: var(--text-primary);
            transition: var(--transition-speed);

            &:hover {
              background-color: var(--text-primary);
              color: var(--bg-primary);
            }
          `}
        >
          + New Post
        </Link>
      )}
    </>
  );
}

export default NewPostButton;
