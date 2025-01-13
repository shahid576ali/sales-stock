import countries from "@/assets/images/country";
import { StoreContext } from "@/context/storeContext";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Profile = () => {
  const navigate = useNavigate();

  const { user } = useContext(StoreContext);
  
  const handleSignOut = () => {
    Cookies.remove("authToken", { path: "/" });
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="h-[390px] flex flex-col items-center right-2 rounded-md fixed top-36 w-[300px] bg-[#fdfdfd] shadow-md lg:top-[80px] animate-slide-down">
      <ToastContainer />
      <div className="h-[240px] w-full bg-cover bg-[url(@/assets/images/pro_bg.jpg)] rounded"></div>
      <img
        className="w-16 relative rounded-xl top-[-40px]"
        src={countries.profile.src}
        alt="bg"
      />
      <div className="flex flex-col items-center">
        <p className="text-[20px] text-gray-600 font-semibold">{user.email}</p>
        <p className="font-semibold text-gray-500 ">{user.phone}</p>
      </div>
      <div className="flex ml-4 gap-10 mt-5 mb-4">
        <button className="border-gray-400 border rounded-xl px-3 py-1">
          <Link to={"/profile"}>Profile</Link>
        </button>
        <button
          className="border border-gray-400 rounded-xl px-3 py-1"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
