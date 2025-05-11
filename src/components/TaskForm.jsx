import React, { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const refs = {
    title: useRef(),
    description: useRef(),
    date: useRef(),
    priority: useRef(),
    tags: useRef(),
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: refs.title.current.value.trim(),
      description: refs.description.current.value.trim(),
      date: refs.date.current.value,
      priority: refs.priority.current.value,
      tags: refs.tags.current.value.trim(),
    };

    if (!task.title || !task.description || !task.date || !task.priority) {
      Swal.fire({
        title: "Oops!",
        text: "All required fields must be filled.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    addTask(task);
    Swal.fire({
      title: "Good job!",
      text: "Task added.",
      icon: "success",
    });
    Object.values(refs).forEach((ref) => (ref.current.value = ""));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          ref={refs.title}
          id="title"
          type="text"
          className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Enter task title"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          ref={refs.description}
          id="description"
          rows="3"
          className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Enter task description"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm mb-1">
            Due Date <span className="text-red-500">*</span>
          </label>
          <input
            ref={refs.date}
            id="date"
            type="date"
            className="w-full px-3 py-2 rounded border bg-white dark:bg-gray-900 dark:border-gray-700"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm mb-1">
            Priority <span className="text-red-500">*</span>
          </label>
          <select
            ref={refs.priority}
            id="priority"
            className="w-full px-3 py-2 rounded border bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm mb-1">
            Tags (optional)
          </label>
          <input
            ref={refs.tags}
            id="tags"
            type="text"
            className="w-full px-3 py-2 rounded border bg-white dark:bg-gray-900 dark:border-gray-700"
            placeholder="e.g. work, personal"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
