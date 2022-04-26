import React from "react";
import MenuItem from "./MenuItem";
import User from "./User";
import UserItems from "./UserItems";


const Sidebar: React.FC = () => {
  return (
    <div>
      <User />
      <UserItems />
      <MenuItem />
    </div>
  );
};

export default Sidebar;
