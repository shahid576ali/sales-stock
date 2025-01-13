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
  const [sidebar, setSidebar] = useState(true);
  const [menuState, setMenuState] = useState({
    productsOpen: false,
    categories: false,
    sales: false,
    purchase: false,
    returns: false,
    people: false,
    other: false,
  });

  const handleMenuToggle = (menuKey) => {
    setMenuState((prev) => {
      const updatedState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === menuKey ? !prev[key] : false;
        return acc;
      }, {});
      return updatedState;
    });
  };

  const handleSide = () => {
    setSidebar(!sidebar);
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
      { to: "/other/userdetails", label: "User Details" },
      { to: "/other/authentication", label: "Authentication" },
      { to: "/other/invoice", label: "Invoice" },
      { to: "/other/list", label: "Table" },
    ],
  };

  return (
    <div
      className={`h-[100vh] ${
        sidebar ? "w-[65px]" : "w-[320px]"
      } bg-[#fdfdfd] flex flex-col items-center py-4 transition-all duration-500 ease-in-out shadow-[2px_0_5px_rgba(0,0,0,0.2)]`}
    >
      <div className="hidden w-full justify-between ml-1 px-4 items-center lg:flex">
        {!sidebar && <Link to={"/"} className="text-[15px]">Logo</Link>}
        <Menu onClick={handleSide} />
      </div>
      <Link to={"/"} className="lg:hidden">Logo</Link>
      <div className="flex flex-col w-full pl-5 justify-start gap-4 h-[80%] mt-12">
        <Link to={"/"} className="hover:text-orange-400 flex items-center w-full text-gray-500 gap-6 cursor-pointer mb-3">
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
                  <CornerRightDown size={15} />
                </div>
              )}
            </div>
            <div
              className={`flex flex-col gap-3 pl-3 text-gray-500 transition-all duration-500 ease-in-out overflow-hidden ${
                !menuState[key] || sidebar ? "h-0 border-none" : "h-[60px]"
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
        <div className="hover:text-orange-400 flex w-full items-center pr-5 text-gray-500 gap-6 cursor-pointer">
          <NotepadText size={!sidebar ? 18 : 22} />
          {!sidebar && <p>Reports</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
