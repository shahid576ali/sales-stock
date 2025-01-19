import {
  Box,
  Copy,
  CreditCard,
  Gem,
  Layers,
  Menu,
  Minimize2,
  NotepadText,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true); // Toggle sidebar width
  const [menuState, setMenuState] = useState({
    productsOpen: false,
    categories: false,
    sales: false,
    purchase: false,
    returns: false,
    people: false,
    other: false,
  });
  const [isVisible, setIsVisible] = useState(false); // For small screen visibility
  const contentRefs = useRef({}); // Refs for dynamically calculating heights

  const handleMenuToggle = (menuKey) => {
    setMenuState((prev) => {
      const updatedState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menuKey ? !prev[key] : false; // Close others
        return acc;
      }, {});
      return updatedState;
    });
  };

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };

  const handleMobileToggle = () => {
    setSidebar(!sidebar);
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Mobile Menu Toggle */}
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
          isVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static ${
          sidebar ? "lg:w-[65px]" : "lg:w-[250px]"
        } w-[320px] bg-[#fdfdfd] flex flex-col items-center py-4 transition-all duration-500 ease-in-out shadow-[2px_0_5px_rgba(0,0,0,0.2)] z-50`}
      >
        <div className="hidden lg:flex w-full justify-between px-4 items-center">
          {!sidebar && (
            <Link to={"/"} className="text-[15px]">
              Logo
            </Link>
          )}
          <Menu onClick={handleSidebarToggle} className="cursor-pointer" />
        </div>
        <Link to={"/"} className="lg:hidden">
          Logo
        </Link>
        <div className="flex flex-col w-full pl-5 justify-start gap-4 h-[80%] overflow-auto mt-12">
          <Link
            to={"/"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <Box size={22} />
            {!sidebar && <p>Dashboard</p>}
          </Link>

          <Link
            to={"/copy"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <Copy size={22} />
            {!sidebar && <p>Copy</p>}
          </Link>

          <Link
            to={"/copy"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <CreditCard size={22} />
            {!sidebar && <p>Copy</p>}
          </Link>

          <Link
            to={"/copy"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <Gem size={22} />
            {!sidebar && <p>Copy</p>}
          </Link>

          <Link
            to={"/copy"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <Layers size={22} />
            {!sidebar && <p>Copy</p>}
          </Link>

          <Link
            to={"/copy"}
            className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3"
          >
            <ShoppingCartIcon size={22} />
            {!sidebar && <p>Copy</p>}
          </Link>
          
          <Link
            to={"/reports"}
            className="hover:text-orange-400 flex w-full items-center pr-5 text-gray-500 gap-6 cursor-pointer"
          >
            <NotepadText size={22} />
            {!sidebar && <p>Reports</p>}
          </Link>
        </div>
      </div>

      {isVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMobileToggle}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;