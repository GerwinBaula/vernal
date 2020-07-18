import { useHistory, useLocation } from "react-router-dom";
import config from "../../config";
import qs from "qs";

function useLink() {
  const history = useHistory();
  const location = useLocation();

  const firstSetOfLinks = [
    { route: "/posts", icon: "reader", text: "Posts" },
    { route: "/comments", icon: "chatbubble-ellipses", text: "Comments" },
    { route: "/profile", icon: "person", text: "Profile" },
  ];

  const secondSetOfLinks = [
    { route: "/new-post", icon: "add-circle", text: "New Post" },
    { route: "/settings", icon: "settings", text: "Settings" },
    { route: "/logout", icon: "log-out", text: "Logout" },
  ];

  function handleLinkChange(link) {
    if (link === "/login") {
      const queryString = {
        client_id: config.clientId,
        response_type: "token",
        state: location.pathname,
      };
      return (window.location = `${
        config.rootUrl
      }/oauth2/authorize?${qs.stringify(queryString)}`);
    }
    if (link === "/logout")
      return history.push({
        pathname: link,
        state: { url: location.pathname },
      });
    return history.push({
      pathname: link,
    });
  }

  return [firstSetOfLinks, secondSetOfLinks, handleLinkChange];
}

export default useLink;
