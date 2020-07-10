import React from "react";

function HamburgerInfo({ username, bio, avatar }) {
  const imageStyle = {
    height: "40px",
    width: "40px",
    border: "1px solid var(--text-primary)",
    borderRadius: "50px",
    backgroundImage: `url(${avatar})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  const textStyle = {
    color: "var(--text-primary)",
  };

  return (
    <div className="d-flex align-items-center p-3">
      <div className="mr-3">
        <div css={imageStyle}></div>
      </div>
      <div className="flex-fill p-0 d-flex flex-column justify-content-center align-items-start">
        <h5 className="m-0" css={textStyle}>
          {username}
        </h5>
        <p className="m-0" css={textStyle}>
          {bio}
        </p>
      </div>
    </div>
  );
}

export default HamburgerInfo;
