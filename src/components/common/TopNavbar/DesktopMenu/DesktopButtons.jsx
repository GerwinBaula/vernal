import React from "react";
import AuthButton from "./AuthButton";
import NewPostButton from "./NewPostButton";

function DesktopButtons({ isLoggedIn, onLinkChange }) {
  return (
    <div className="d-none d-sm-inline-flex">
      <NewPostButton isLoggedIn={isLoggedIn} />
      <AuthButton isLoggedIn={isLoggedIn} onLinkChange={onLinkChange} />
    </div>
  );
}

export default DesktopButtons;
