import { useTaskList } from "../hooks/useTaskList";

const TaskList = () => {
  const { tasks, toggleComplete, handleDeleteTask, handleDownloadTasks } =
    useTaskList();

  if (tasks.length === 0)
    return (
      <p className="text-center mt-10 p-4 bg-gray-200 rounded-xl">
        No tasks added yet.
      </p>
    );

  return (
    <>
      <div className="text-right">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleDownloadTasks}
        >
          Donwload Tasks
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </h3>
                <p className="text-sm mt-1">Description: {task.description}</p>
                <p className="text-xs mt-1">
                  Due:{" "}
                  <span className="font-bold text-blue-500">{task.date}</span>
                </p>
                <p className="text-xs">
                  Priority:{" "}
                  <span className="font-bold text-blue-500">
                    {task.priority}
                  </span>
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="bg-transparent transition delay-100 hover:bg-green-400 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded"
                >
                  {task.completed ? "↩️Undo" : "✅Complete"}
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-transparent transition delay-100 hover:bg-red-400 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded"
                >
                  ❌Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
