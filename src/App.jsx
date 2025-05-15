import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./layout/Header";
import Tabs from "./components/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="max-w-7xl m-auto">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "add" && <TaskForm />}
      {activeTab === "list" && <TaskList />}
    </div>
  );
}

export default App;
