import React, { useContext } from "react";
import { StateContext } from "../../state/contexts";
import stateSelectors from "../../state/selectors";
import SideNavbarMenu from "../../common/SideNavbarMenu/SideNavbarMenu";
import PagesContent from "./PagesContent";
import TopNavbar from "../../common/TopNavbar/TopNavbar";

function Pages() {
  const state = useContext(StateContext);
  const theme = stateSelectors.getCurrentTheme(state);

  return (
    <div className={theme}>
      <TopNavbar />
      <div className="container-xl p-0">
        <SideNavbarMenu />
        <PagesContent />
      </div>
    </div>
  );
}

export default Pages;
