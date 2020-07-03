import React from "react";
import SideNavbarItem from "./SideNavbarItem";
import SideNavbarTitle from "./SideNavbarTitle";

function SideNavbarList({
  checked,
  listItems,
  onCheckedChange,
  onToggleChange,
}) {
  return (
    <ul className="d-flex flex-row flex-sm-column align-items-center list-unstyled py-0 m-0 h-100">
      {listItems.map((item) => (
        <li className={`w-100 ${item.className}`} key={item.icon}>
          {"title" in item ? (
            <SideNavbarTitle item={item} />
          ) : (
            <SideNavbarItem
              checked={checked}
              item={item}
              onCheckedChange={onCheckedChange}
              onToggleChange={onToggleChange}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default SideNavbarList;
