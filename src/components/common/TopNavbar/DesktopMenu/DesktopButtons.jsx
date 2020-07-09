import React from "react";
import AuthButton from "./AuthButton";
import NewPostButton from "./NewPostButton";

function DesktopButtons({ loggedInStatus, onLogin, onLogout }) {
  return (
    <div className="d-none d-sm-inline-flex">
      <NewPostButton loggedInStatus={loggedInStatus} />
      <AuthButton
        loggedInStatus={loggedInStatus}
        onLogin={onLogin}
        onLogout={onLogout}
      />
    </div>
  );
}

export default DesktopButtons;
