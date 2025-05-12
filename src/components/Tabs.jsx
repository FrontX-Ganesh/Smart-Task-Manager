import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-tl-md rounded-bl-md ${
            activeTab === "add"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add Task
        </button>
        <button
          className={`px-4 py-2 rounded-tr-md rounded-br-md ${
            activeTab === "list"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("list")}
        >
          All Tasks
        </button>
      </div>
    </>
  );
};

export default Tabs;
