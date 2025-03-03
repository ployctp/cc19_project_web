import React from "react";
import { Outlet } from "react-router";

import HeaderAdmin from "../components/admin/HeaderAdmin";
import SidebarAdmin from "../components/admin/sidebarAdmin";

const LayoutAdmin = () => {
  return (
    <div className="flex h-screen">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col">
        <HeaderAdmin />
        <main className="flex-1 p-6 bg-slate-200 over">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
