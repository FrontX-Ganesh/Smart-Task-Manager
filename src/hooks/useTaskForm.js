import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import { TaskContext } from "../context/TaskContext";

export const useTaskForm = () => {
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
  return {
    refs,
    handleFormSubmit,
  };
};
