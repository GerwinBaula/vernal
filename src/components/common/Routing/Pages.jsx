import React, { useContext } from "react";
import { StateContext } from "../../state/contexts";
import { getCurrentTheme } from "../../state/selectors";
import SideNavbarMenu from "../SideNavbarMenu/SideNavbarMenu";
import PagesContent from "./PagesContent";
import TopNavbar from "../TopNavbar";

function Pages() {
  const state = useContext(StateContext);
  const theme = getCurrentTheme(state);

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
