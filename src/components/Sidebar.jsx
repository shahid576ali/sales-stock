import {
  Box,
  Copy,
  CreditCard,
  Layers,
  Menu,
  NotepadText,
  StickyNote,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(!false); // For PC sidebar collapse
  const location = useLocation();

  const handleMobileToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOptionSelect = () => {
    if (sidebarOpen) {
      setSidebarOpen(false); // Close mobile sidebar
    }
    if (!isSidebarCollapsed) {
      setIsSidebarCollapsed(true); // Collapse PC sidebar
    }
  };

  const handleCollapseToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const isActive = (route) => location.pathname === route;

  return (
    <div>
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex justify-between items-center px-4 h-full gap-4 shadow-md bg-white">
        <Link to={"/"} className="text-lg font-bold">
          Logo
        </Link>
        <Menu
          size={24}
          onClick={handleMobileToggle}
          className="cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static ${
          isSidebarCollapsed ? "lg:w-[65px]" : "lg:w-[250px]"
        } w-[320px] bg-[#fdfdfd] flex flex-col items-center py-4 transition-all duration-500 ease-in-out shadow-[2px_0_5px_rgba(0,0,0,0.2)] z-50`}
      >
        {/* Sidebar Header */}
        <div className="hidden lg:flex w-full justify-between px-4 items-center">
          {!isSidebarCollapsed && (
            <Link to={"/"} className="text-[15px]">
              Logo
            </Link>
          )}
          <Menu
            onClick={handleCollapseToggle}
            className="cursor-pointer"
          />
        </div>
        <Link to={"/"} className="lg:hidden">
          Logo
        </Link>

        {/* Sidebar Links */}
        <div className="flex flex-col w-full pl-5 justify-start gap-4 h-[80%] overflow-auto mt-12">
          {[
            { route: "/", icon: <Box size={22} />, label: "Dashboard" },
            { route: "/copy", icon: <Copy size={22} />, label: "Copy" },
            { route: "/purchase", icon: <CreditCard size={22} />, label: "Purchase" },
            { route: "/users", icon: <UsersRound size={22} />, label: "Users" },
            { route: "/others", icon: <Layers size={22} />, label: "Others" },
            { route: "/tasks", icon: <StickyNote size={22} />, label: "Task" },
            { route: "/reports", icon: <NotepadText size={22} />, label: "Reports" },
          ].map(({ route, icon, label }) => (
            <Link
              key={route}
              to={route}
              onClick={handleOptionSelect}
              className={`flex items-center w-full gap-4 cursor-pointer hover:text-orange-400 mb-3 ${
                isActive(route) ? "text-orange-400 font-bold" : "text-gray-500"
              }`}
            >
              <span>{icon}</span>
              <p
                className={`transition-opacity duration-500 ${
                  isSidebarCollapsed && !sidebarOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                {label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMobileToggle}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
