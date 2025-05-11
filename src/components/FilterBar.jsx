import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const FilterBar = () => {
  const {
    filter,
    setFilter,
    priorityFilter,
    setPriorityFilter,
    sortOrder,
    setSortOrder,
  } = useContext(TaskContext);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">Filter:</span>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">Sort:</span>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-3 py-2 rounded border dark:border-gray-700 bg-white dark:bg-gray-900 text-sm"
        >
          <option value="dueDateAsc">Due Date ↑</option>
          <option value="dueDateDesc">Due Date ↓</option>
          <option value="priority">Priority</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
