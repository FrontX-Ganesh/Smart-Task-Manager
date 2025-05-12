import { useContext } from "react";
import Swal from "sweetalert2";
import { TaskContext } from "../context/TaskContext";
import * as XLSX from "xlsx";

export const useTaskList = () => {
  const { tasks, deleteTask, toggleComplete } = useContext(TaskContext);

  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleDownloadTasks = () => {
    const worksheet = XLSX.utils.json_to_sheet(tasks);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "reportName");

    XLSX.writeFile(workbook, "tasks.xlsx");
  };
  return {
    tasks,
    toggleComplete,
    handleDeleteTask,
    handleDownloadTasks,
  };
};
