import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form className="flex flex-col md:flex-row gap-3 w-full" onSubmit={handleSubmit}>
      <input
        className="flex-grow focus:outline-none text-black px-2 py-1 focus:outline-black rounded-sm"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button className="border border-white border-solid px-1 rounded-sm hover:bg-blue-300 transition-all ease-in-out" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTask;