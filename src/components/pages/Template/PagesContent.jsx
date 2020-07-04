import React, { useContext } from "react";
import AllRoutes from "../../common/Routing/AllRoutes";
import { StateContext } from "../../state/contexts";
import stateSelectors from "../../state/selectors";

function PagesContent() {
  const state = useContext(StateContext);
  const loggedInStatus = stateSelectors.getLoggedInStatus(state);

  const mainStyle = {
    marginLeft: `${!loggedInStatus ? "0px" : "var(--sidenav-offset-hovered)"}`,
    "@media (max-width: 1200px)": {
      marginLeft: `${!loggedInStatus ? "0px" : "var(--sidenav-offset)"}`,
    },
    "@media (max-width: 575px)": {
      marginLeft: "0px",
      marginBottom: `${
        !loggedInStatus ? "0px" : "var(--sidenav-offset-mobile)"
      }`,
    },
  };

  return (
    <main className="flex-fill" css={mainStyle}>
      <AllRoutes />
    </main>
  );
}

export default PagesContent;
