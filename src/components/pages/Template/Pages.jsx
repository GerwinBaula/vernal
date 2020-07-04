import React, { useContext } from "react";
import { StateContext } from "../../state/contexts";
import stateSelectors from "../../state/selectors";
import SideNavbarMenu from "../../common/SideNavbarMenu/SideNavbarMenu";
import PagesContent from "./PagesContent";
import TopNavbar from "../../common/TopNavbar";

function Pages() {
  const state = useContext(StateContext);
  const theme = stateSelectors.getCurrentTheme(state);

  return (
    <div className={theme}>
      <TopNavbar />
      <div className="container-xl p-0 d-flex">
        <SideNavbarMenu />
        <PagesContent />
      </div>
    </div>
  );
}

export default Pages;
