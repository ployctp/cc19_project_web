import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  UserRoundCog,
  LogOut,
  ShoppingBag,
  Tags,
} from "lucide-react";

const SidebarAdmin = () => {
  return (
    <div className="bg-[#121417] w-64 text-white flex flex-col h-screen ">
      <div className="h-24 bg-[#121417  ] flex items-center justify-center text-2xl font-bold">
        Admin Panel
      </div>

      <nav className="flex-1 px-10  py-10 space-y-8">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            isActive
              ? " bg-[#3B5249] rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <LayoutDashboard className="mr-2" />
          Dashboard
        </NavLink>
        <NavLink
          to={"manage"}
          className={({ isActive }) =>
            isActive
              ? " bg-[#3B5249] rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <UserRoundCog className="mr-2" />
          Manage
        </NavLink>
        <NavLink
          to={"category"}
          className={({ isActive }) =>
            isActive
             ? " bg-[#3B5249] rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <Tags className="mr-2" />
          Category
        </NavLink>
        <NavLink
          to={"product"}
          className={({ isActive }) =>
            isActive
              ? " bg-[#3B5249] rounded-md text-white px-4 py-2 flex items-center"
              : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
        >
          <ShoppingBag className="mr-2" />
          Product
        </NavLink>
      </nav>

      <div className="flex-1 px-5  py-20 space-y-10">
        <NavLink
          to={"manage"}
          className=" text-red-400   px-4 py-2 hover:text-red-500 rounded flex items-center  hover:bg-red-500/20"
        >
          <LogOut className="mr-2" />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;
