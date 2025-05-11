import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState(""); // '', 'high', etc.
  const [sortOrder, setSortOrder] = useState("dueDateAsc"); // dueDateAsc, dueDateDesc, priority

  // Derived tasks after filter and sort
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (!priorityFilter) return true;
      return task.priority === priorityFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "dueDateAsc")
        return new Date(a.date) - new Date(b.date);
      if (sortOrder === "dueDateDesc")
        return new Date(b.date) - new Date(a.date);
      if (sortOrder === "priority") {
        const levels = { high: 3, medium: 2, low: 1 };
        return levels[b.priority] - levels[a.priority];
      }
      return 0;
    });

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { ...task, id: Date.now(), completed: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        deleteTask,
        toggleComplete,
        filter,
        setFilter,
        priorityFilter,
        setPriorityFilter,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
