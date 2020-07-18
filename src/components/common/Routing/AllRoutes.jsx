import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CommentsPage from "../../pages/CommentsPage/CommentsPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import ImagesPage from "../../pages/ImagesPage/ImagesPage";
import ImagePage from "../../pages/ImagePage/ImagePage";
import NewPostPage from "../../pages/NewPostPage/NewPostPage";
import PostsPage from "../../pages/PostsPage/PostsPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";
import TagsPage from "../../pages/TagsPage/TagsPage";
import TagPage from "../../pages/TagPage/TagPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import LoginHandler from "../AuthHandlers/LoginHandler";
import LogoutHandler from "../AuthHandlers/LogoutHandler";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import UnprotectedRoute from "./UnprotectedRoute";

function AllRoutes(props) {
  return (
    <Switch>
      <UnprotectedRoute
        exact
        path="/"
        component={HomePage}
        isLoggedIn={props.isLoggedIn}
      />
      } />
      <ProtectedRoute
        path="/comments"
        component={CommentsPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/favorites"
        component={FavoritesPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/images"
        component={ImagesPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/new-post"
        component={NewPostPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/posts"
        component={PostsPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/profile"
        component={ProfilePage}
        isLoggedIn={props.isLoggedIn}
      />
      <UnprotectedRoute
        path="/results"
        component={ResultsPage}
        isLoggedIn={props.isLoggedIn}
      />
      <UnprotectedRoute
        path="/tags"
        component={TagsPage}
        isLoggedIn={props.isLoggedIn}
      />
      } />
      <UnprotectedRoute
        path="/tag/:id"
        component={TagPage}
        isLoggedIn={props.isLoggedIn}
      />
      <ProtectedRoute
        path="/settings"
        component={SettingsPage}
        isLoggedIn={props.isLoggedIn}
      />
      <UnprotectedRoute
        path="/image/:id"
        component={ImagePage}
        isLoggedIn={props.isLoggedIn}
      />
      <UnprotectedRoute
        path="/oauth2/callback"
        component={LoginHandler}
        onLogin={props.onLogin}
        onUserReceive={props.onUserReceive}
      />
      <UnprotectedRoute
        path="/logout"
        component={LogoutHandler}
        onLogout={props.onLogout}
        onUserRemove={props.onUserRemove}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AllRoutes;
