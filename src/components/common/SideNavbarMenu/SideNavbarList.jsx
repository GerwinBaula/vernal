import React from "react";
import SideNavbarItem from "./SideNavbarItem";
import SideNavbarTitle from "./SideNavbarTitle";

function SideNavbarList(props) {
  return (
    <ul className="d-flex flex-row flex-sm-column align-items-center list-unstyled py-0 m-0 h-100">
      {props.listItems.map((item) => (
        <li className={`w-100 ${item.className}`} key={item.icon}>
          {"title" in item ? (
            <SideNavbarTitle item={item} />
          ) : (
            <SideNavbarItem
              checked={props.checked}
              item={item}
              onCheckedChange={props.onCheckedChange}
              onThemeChange={props.onThemeChange}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default SideNavbarList;
