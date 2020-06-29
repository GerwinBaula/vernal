import React, { useContext } from "react";
import SideNavbar from "./SideNavbar";
import { StateContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import AllRoutes from "./AllRoutes";

const breakpoints = [1200, 575];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function Pages() {
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);

  return (
    <div className="container-xl p-0 d-flex">
      <SideNavbar />
      <main
        className="flex-fill"
        css={{
          marginLeft: `${
            !loggedInStatus ? "0px" : "var(--sidenav-offset-hovered)"
          }`,
          [mq[0]]: {
            marginLeft: `${!loggedInStatus ? "0px" : "var(--sidenav-offset)"}`,
          },
          [mq[1]]: {
            marginLeft: "0px",
            marginBottom: `${
              !loggedInStatus ? "0px" : "var(--sidenav-offset-mobile)"
            }`,
          },
        }}
      >
        <AllRoutes />
      </main>
    </div>
  );
}

export default Pages;
