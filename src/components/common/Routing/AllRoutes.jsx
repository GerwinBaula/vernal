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

function AllRoutes(outsideProps) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <HomePage {...props} isLoggedIn={outsideProps.isLoggedIn} />
        )}
      />
      <ProtectedRoute
        path="/comments"
        component={CommentsPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <ProtectedRoute
        path="/favorites"
        component={FavoritesPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <ProtectedRoute
        path="/images"
        component={ImagesPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <ProtectedRoute
        path="/new-post"
        component={NewPostPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <ProtectedRoute
        path="/posts"
        component={PostsPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <ProtectedRoute
        path="/profile"
        component={ProfilePage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <Route path="/results" component={ResultsPage} />
      <Route
        path="/tags"
        render={(props) => (
          <TagsPage {...props} isLoggedIn={outsideProps.isLoggedIn} />
        )}
      />
      <Route path="/tag/:id" component={TagPage} />
      <ProtectedRoute
        path="/settings"
        component={SettingsPage}
        isLoggedIn={outsideProps.isLoggedIn}
      />
      <Route path="/image/:id" component={ImagePage} />
      <Route
        path="/oauth2/callback"
        render={(props) => (
          <LoginHandler
            {...props}
            onLogin={outsideProps.onLogin}
            onUserReceive={outsideProps.onUserReceive}
          />
        )}
      />
      <Route
        path="/logout"
        render={(props) => (
          <LogoutHandler
            {...props}
            onLogout={outsideProps.onLogout}
            onUserRemove={outsideProps.onUserRemove}
          />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default AllRoutes;
