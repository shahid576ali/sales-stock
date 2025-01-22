import countries from "@/assets/images/country";
import { AlignRight, Bell, Mail, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setshowMenu] = useState(false);

  const handleProfileClick = () => {
    setShowProfile((prev) => !prev);
  };

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <header className="flex fixed z-[99] top-0 w-full flex-row h-[73px] gap-3">
      <Sidebar />
      <nav className="h-[73px] bg-[#fdfdfd] shadow-lg flex px-4 sm:px-8 items-center justify-between lg:justify-between w-full">
        <div className=" flex w-[80%] gap-2 border sm:w-[450px] border-gray-400 lg:h-10 h-10 rounded-[12px] px-1 items-center ">
          <SearchIcon className="pl-2" color="grey" size={"27px"} />
          <input
            className="w-full outline-none border-none h-[97%] bg-[#fdfdfd] rounded"
            type="text"
            placeholder="Search here..."
          />
        </div>

        <div
          className={`fixed ${
            showMenu ? "flex" : "hidden"
          } right-7 top-[74px] rounded shadow-lg lg:shadow-none bg-[#fdfdfd] p-2 lg:flex lg:static lg:bg-transparent lg:w-[350px] items-center justify-between gap-3 transition-all duration-300 animate-slide-down`}
        >
          <Link to={'/reports'}
            className="border rounded-[8px] shadow-sm text-gray-500 text-xs px-3 gap-1 flex items-center justify-center"
          >
            <p className="text-2xl font-light mb-1">+</p> New Task
          </Link>

          <Mail className="cursor-pointer" color="grey" size={20} />
          <Bell className="cursor-pointer" color="grey" size={20} />

          <img
            className="w-10 cursor-pointer rounded-[50%] bg-black"
            src={countries.profile.src}
            alt="profile"
            onClick={handleProfileClick}
          />
        </div>
        <AlignRight onClick={handleMenuClick} className="lg:hidden block" />
      </nav>

      {showProfile && <Profile />}
    </header>
  );
};

export default Navbar;
