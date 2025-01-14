import { StoreContext } from "@/context/storeContext";
import React, { useContext } from "react";
import Card from "./Card";
import Charts from "./Charts";

const Dashboard = () => {
  const { user } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-end justify-start py-[89px] pl-[80px] h-screen w-full">
      <div className="flex flex-wrap lg:flex-nowrap w-full justify-between mt-2 p-3 gap-4">
        {/* Greeting Section */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <h1 className="text-gray-500 text-2xl sm:text-3xl font-medium">
            Hi {user.firstName}, Good Morning
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Your dashboard gives you views of key performance or business
            processes.
          </p>
        </div>

        <Card
          title={"Total Sales"}
          img={
            "https://templates.iqonic.design/posdash/html/assets/images/product/1.png"
          }
          unit={45.69}
        />
        <Card
          title={"Total Cost"}
          img={
            "https://templates.iqonic.design/posdash/html/assets/images/product/2.png"
          }
          unit={"$ 469"}
        />
        <Card
          title={"Product Sold"}
          img={
            "https://templates.iqonic.design/posdash/html/assets/images/product/3.png"
          }
          unit={"4569 M"}
        />
      </div>
      <Charts />
    </div>
  );
};

export default Dashboard;
