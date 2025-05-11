import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Smart Task Manager</h1>
      </header>

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

      {activeTab === "add" && <TaskForm />}
      {activeTab === "list" && (
        <>
          
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
