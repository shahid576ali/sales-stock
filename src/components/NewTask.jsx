import React from "react";

const NewTask = () => {
  return (
    <div
      className="w-[70%] sm:w-[400px] h-auto rounded flex flex-col px-3 shadow-lg fixed right-4 sm:right-[270px] lg:top-20 lg:right-[330px] top-36 justify-start gap-4 py-3 
      animate-slide-down bg-white"
    >
      <p className="text-gray-800 font-medium text-left">New Task</p>
      <input
        className="px-3 py-2 rounded-sm border outline-none w-full"
        type="text"
        placeholder="Task description..."
      />
      <button className="bg-blue-500 mx-auto py-2 w-[50%] sm:w-20 hover:bg-blue-600 text-white rounded-md">
        Create
      </button>
    </div>
  );
};

export default NewTask;
