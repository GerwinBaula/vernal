import React from "react";
import SideNavbarMenu from "../../common/SideNavbarMenu/SideNavbarMenu";
import PagesContent from "./PagesContent";
import TopNavbar from "../../common/TopNavbar/TopNavbar";
import useTheme from "../../customHooks/useTheme";
import useToken from "../../customHooks/useToken";
import useUser from "../../customHooks/useUser";

function Pages() {
  const [theme, handleThemeChange] = useTheme();
  const [token, handleLogin, handleLogout] = useToken();
  const [user, handleUserReceive, handleUserRemove] = useUser();

  return (
    <div className={theme}>
      <TopNavbar user={user} isLoggedIn={!!token} />
      <div className="container-xl p-0">
        <SideNavbarMenu
          theme={theme}
          onThemeChange={handleThemeChange}
          isLoggedIn={!!token}
        />
        <PagesContent
          isLoggedIn={!!token}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onUserReceive={handleUserReceive}
          onUserRemove={handleUserRemove}
        />
      </div>
    </div>
  );
}

export default Pages;
