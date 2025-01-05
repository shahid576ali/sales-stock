import countries from "@/assets/images/country";
import React from "react";

const Profile = () => {
  return (
    <div className="h-[390px] flex flex-col items-center right-2 rounded-md fixed top-36 w-[300px] bg-[fdfdfd] shadow-md lg:top-[75px] animate-slide-down">
      <div className="h-[240px] w-full bg-cover bg-[url(@/assets/images/pro_bg.jpg)] rounded"></div>
      <img
        className="w-16 relative rounded-xl top-[-40px]"
        src={countries.profile.src}
        alt="bg"
      />
      <div className="flex flex-col items-center">
      <p className="text-[20px] text-gray-600 font-semibold">
        johndoe@email.com
      </p>
      <p className="font-semibold text-gray-500 ">Since 10 march, 2022</p>
      </div>
      <div className="flex ml-4 gap-10 mt-5 mb-4">
        <button className="border-gray-400 border rounded-sm px-3 py-1">Profile</button>
        <button className="border border-gray-400 rounded-sm px-3 py-1">Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
