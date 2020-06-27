import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import ImagesPage from "./components/ImagesPage/ImagesPage";
import ImagePage from "./components/ImagePage/ImagePage";
import NewPostPage from "./components/NewPostPage/NewPostPage";
import PostsPage from "./components/PostsPage/PostsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import TagsPage from "./components/TagsPage/TagsPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import AuthHandler from "./components/common/AuthHandler";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/comments" component={CommentsPage}></Route>
      <Route path="/favorites" component={FavoritesPage}></Route>
      <Route path="/images" component={ImagesPage}></Route>
      <Route path="/new-post" component={NewPostPage}></Route>
      <Route path="/posts" component={PostsPage}></Route>
      <Route path="/profile" component={ProfilePage}></Route>
      <Route path="/results" component={ResultsPage}></Route>
      <Route path="/tags" component={TagsPage}></Route>
      <Route path="/settings" component={SettingsPage}></Route>
      <Route path="/image/:id" component={ImagePage}></Route>
      <Route path="/oauth2/callback" component={AuthHandler}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  );
}

export default Routing;
