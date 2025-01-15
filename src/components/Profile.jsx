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
    <div className="h-auto lg:h-[390px] flex flex-col items-center right-4 sm:right-8 lg:right-2 rounded-md fixed top-36 lg:top-20 w-[60%] sm:w-[320px] lg:w-[300px] bg-white shadow-md animate-slide-down">
      <ToastContainer />

      <div className="h-[200px] w-full bg-cover bg-center rounded-t-md bg-[url('@/assets/images/pro_bg.jpg')]">
        {/* Fallback to solid color */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-full w-full rounded-t-md"></div>
      </div>

      {/* Profile Image */}
      <img
        className="w-20 h-20 relative rounded-full border-4 border-white -mt-10"
        src={countries?.profile?.src || "fallback_image_url_here"}
        alt="Profile"
      />

      {/* User Info */}
      <div className="flex flex-col items-center mt-4">
        <p className="text-lg font-semibold text-gray-700">{user?.email || "No Email"}</p>
        <p className="text-sm text-gray-500">{user?.phone || "No Phone"}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6 mb-4">
        <button className="border border-gray-300 hover:border-gray-500 transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
          <Link to={"/profile"}>Profile</Link>
        </button>
        <button
          className="border border-red-300 hover:border-red-500 transition-all duration-300 rounded-xl px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
