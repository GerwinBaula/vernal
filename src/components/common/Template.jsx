import React, { useContext } from "react";
import { StateContext } from "../state/contexts";
import { getLoggedInStatus } from "../state/selectors";
import SideNavbar from "../common/SideNavbar";

const breakpoints = [1200, 575];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function Template({ content: Content, routePath }) {
  const state = useContext(StateContext);
  const loggedInStatus = getLoggedInStatus(state);

  return (
    <div className="container-xl p-0 d-flex">
      <SideNavbar routePath={routePath} />
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
        <Content />
      </main>
    </div>
  );
}

export default Template;
