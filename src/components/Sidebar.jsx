import {
  Box,
  Copy,
  CornerRightDown,
  CreditCard,
  Gem,
  Layers,
  Menu,
  Minimize2,
  NotepadText,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import React, { useState } from "react";
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

  const handleMenuToggle = (menuKey) => {
    setMenuState((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };

  const handleMobileToggle = () => {
    setIsVisible(!isVisible);
  };

  const sectionOptions = {
    productsOpen: [
      { to: "/product/list", label: "Product List" },
      { to: "/product/add", label: "Add Product" },
    ],
    categories: [
      { to: "/category/list", label: "Category List" },
      { to: "/category/add", label: "Add Category" },
    ],
    sales: [
      { to: "/sale/list", label: "Sale List" },
      { to: "/sale/add", label: "Add Sale" },
    ],
    purchase: [
      { to: "/purchase/list", label: "Purchase List" },
      { to: "/purchase/add", label: "Add Purchase" },
    ],
    returns: [
      { to: "/returns/list", label: "Returns List" },
      { to: "/returns/add", label: "Add Returns" },
    ],
    people: [
      { to: "/people/add", label: "Add Person" },
      { to: "/people/list", label: "People List" },
    ],
    other: [
      { to: "/other/userlist", label: "User List" },
      { to: "/other/authentication", label: "Authentication" },
      { to: "/other/invoice", label: "Invoice" },
      { to: "/other/list", label: "Table" },
    ],
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
          sidebar ? "lg:w-[65px]" : "lg:w-[320px]"
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
            <Box size={!sidebar ? 18 : 22} />
            {!sidebar && <p>Dashboard</p>}
          </Link>
          {[
            { key: "productsOpen", icon: ShoppingCartIcon, label: "Products" },
            { key: "categories", icon: Copy, label: "Categories" },
            { key: "sales", icon: Gem, label: "Sale" },
            { key: "purchase", icon: CreditCard, label: "Purchases" },
            { key: "returns", icon: Minimize2, label: "Returns" },
            { key: "people", icon: User, label: "People" },
            { key: "other", icon: Layers, label: "Other Pages" },
          ].map(({ key, icon: Icon, label }) => (
            <React.Fragment key={key}>
              <div
                className="hover:text-orange-400 flex w-full items-center pr-5 text-gray-500 gap-6 cursor-pointer"
                onClick={() => handleMenuToggle(key)}
              >
                <Icon size={22} />
                {!sidebar && (
                  <div className="flex w-full justify-between items-center">
                    <p>{label}</p>
                    <CornerRightDown
                      size={15}
                      className={`transition-transform duration-300 ${
                        menuState[key] ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                )}
              </div>
              <div
                className={`flex flex-col gap-3 pl-3 text-gray-500 transition-all duration-500 ease-in-out overflow-hidden ${
                  menuState[key] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {sectionOptions[key].map((e) => (
                  <Link
                    key={e.to}
                    to={e.to}
                    className="hover:text-orange-400 cursor-pointer flex items-center gap-4"
                  >
                    <hr className="bg-gray-500 w-3 h-[2px]" /> {e.label}
                  </Link>
                ))}
              </div>
            </React.Fragment>
          ))}
          <Link
            to={"/reports"}
            className="hover:text-orange-400 flex w-full items-center pr-5 text-gray-500 gap-6 cursor-pointer"
          >
            <NotepadText size={!sidebar ? 18 : 22} />
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
