import {
  Box,
  Copy,
  CreditCard,
  Menu,
  Minimize2,
  NotepadText,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const handleSide = () => {
    setSidebar(!sidebar);
  };

  return (
    <div
    className={`h-[100vh] ${
      sidebar ? "w-[65px]" : "w-[260px]"
    } bg-[#fdfdfd] flex flex-col items-center gap-4 py-8 transition-all duration-500 ease-in-out shadow-[2px_0_5px_rgba(0,0,0,0.2)]`}
  >
      <div className="hidden w-full justify-around px-4 items-center lg:flex">
        {!sidebar && <p className="text-[15px]">Company logo</p>}
        <Menu onClick={handleSide} />
      </div>

      <div className="flex flex-col w-full pl-5 justify-evenly h-[70%]">
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <Box />
          {!sidebar && <p>Dashboard</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full bg text-gray-500 gap-6">
          <ShoppingCartIcon />
          {!sidebar && <p className="hover:text-black">Products</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <Copy />
          {!sidebar && <p>Categories</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <User />
          {!sidebar && <p>People</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <Minimize2 />
          {!sidebar && <p>Returns</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <NotepadText />
          {!sidebar && <p>Reports</p>}
        </a>
        <a href="#" className="hover:text-orange-400 flex w-full text-gray-500 gap-6">
          <CreditCard />
          {!sidebar && <p>Purchases</p>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
