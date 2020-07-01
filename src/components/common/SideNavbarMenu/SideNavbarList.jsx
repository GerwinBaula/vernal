import React from "react";
import SideNavbarItem from "./SideNavbarItem";
import SideNavbarTitle from "./SideNavbarTitle";

function SideNavbarList({ listItems, onCheckedChange, dispatch }) {
  return (
    <ul className="d-flex flex-row flex-sm-column align-items-center list-unstyled py-0 m-0 h-100">
      {listItems.map((item) => (
        <li className={`w-100 ${item.className}`} key={item.icon}>
          {"title" in item ? (
            <SideNavbarTitle item={item} />
          ) : (
            <SideNavbarItem
              item={item}
              onCheckedChange={onCheckedChange}
              dispatch={dispatch}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default SideNavbarList;
