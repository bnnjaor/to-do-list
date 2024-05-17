import { useState, useEffect } from "react";
import AddTask from './components/AddTask';
import Filters from './components/Filters';
import TaskList from './components/TaskList';

function App() {
  // Inicializa las tareas con los datos de localStorage si existen
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [filter, setFilter] = useState("all"); // Añadimos estado para el filtro

  // Actualiza localStorage cada vez que cambian las tareas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="pt-20 flex flex-col items-center justify-center w-full px-4 md:px-0">
      <h1 className="font-bold mb-5 text-4xl md:text-7xl drop-shadow-xl">To-Do List</h1>
      <div className="font-Montserrat w-full max-w-xl border border-solid border-white px-4 py-4 md:px-6 md:py-6 flex flex-col items-center gap-3 rounded-md shadow-md shadow-black">
        <AddTask addTask={addTask} />
        <Filters setFilter={setFilter} />
        <TaskList tasks={filteredTasks} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} />
      </div>
    </div>
  );
}

export default App;