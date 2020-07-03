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
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import LoginHandler from "../AuthHandlers/LoginHandler";
import LogoutHandler from "../AuthHandlers/LogoutHandler";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";

function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/comments" component={CommentsPage} />
      <ProtectedRoute path="/favorites" component={FavoritesPage} />
      <ProtectedRoute path="/images" component={ImagesPage} />
      <ProtectedRoute path="/new-post" component={NewPostPage} />
      <ProtectedRoute path="/posts" component={PostsPage} />
      <ProtectedRoute path="/profile" component={ProfilePage} />
      <Route path="/results" component={ResultsPage} />
      <Route path="/tags" component={TagsPage} />
      <ProtectedRoute path="/settings" component={SettingsPage} />
      <Route path="/image/:id" component={ImagePage} />
      <Route path="/oauth2/callback" component={LoginHandler} />
      <Route path="/logout" component={LogoutHandler} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AllRoutes;
