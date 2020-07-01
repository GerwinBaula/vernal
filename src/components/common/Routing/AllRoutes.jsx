import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../HomePage/HomePage";
import CommentsPage from "../../CommentsPage/CommentsPage";
import FavoritesPage from "../../FavoritesPage/FavoritesPage";
import ImagesPage from "../../ImagesPage/ImagesPage";
import ImagePage from "../../ImagePage/ImagePage";
import NewPostPage from "../../NewPostPage/NewPostPage";
import PostsPage from "../../PostsPage/PostsPage";
import ProfilePage from "../../ProfilePage/ProfilePage";
import ResultsPage from "../../ResultsPage/ResultsPage";
import TagsPage from "../../TagsPage/TagsPage";
import SettingsPage from "../../SettingsPage/SettingsPage";
import LoginHandler from "../AuthHandlers/LoginHandler";
import LogoutHandler from "../AuthHandlers/LogoutHandler";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";
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
