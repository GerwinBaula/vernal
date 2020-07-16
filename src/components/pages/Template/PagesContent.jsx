import React from "react";
import AllRoutes from "../../common/Routing/AllRoutes";

function PagesContent(props) {
  const mainStyle = {
    marginLeft: `${
      !props.isLoggedIn ? "0px" : "var(--sidenav-offset-hovered)"
    }`,
    "@media (max-width: 1200px)": {
      marginLeft: `${!props.isLoggedIn ? "0px" : "var(--sidenav-offset)"}`,
    },
    "@media (max-width: 575px)": {
      marginLeft: "0px",
      marginBottom: `${
        !props.isLoggedIn ? "0px" : "var(--sidenav-offset-mobile)"
      }`,
    },
  };

  return (
    <main css={mainStyle}>
      <AllRoutes
        isLoggedIn={props.isLoggedIn}
        onLogin={props.onLogin}
        onLogout={props.onLogout}
        onUserReceive={props.onUserReceive}
        onUserRemove={props.onUserRemove}
      />
    </main>
  );
}

export default PagesContent;
