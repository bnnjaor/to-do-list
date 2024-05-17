import React, { useState } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TaskList = ({ tasks, removeTask, toggleTaskCompletion }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <ul className="list-none border border-solid border-white w-full px-2 rounded text-white font-Montserrat">
      {tasks.map((task, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          className="relative flex items-center justify-between py-2"
        >
          <li className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.text}
          </li>
          <FaCheck
            className={`ml-2 cursor-pointer transition-opacity duration-300 ${task.completed ? 'text-green-500' : 'text-gray-500'} ${hoverIndex === index ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => toggleTaskCompletion(index)}
          />
          <FaTrash
            className={`ml-2 cursor-pointer transition-opacity duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => removeTask(index)}
          />
        </div>
      ))}
    </ul>
  );
};

export default TaskList;
