import React from 'react';

const Filters = ({ setFilter }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full justify-center">
      <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded hover:bg-slate-400 text-white">
        All
      </button>
      <button onClick={() => setFilter("pending")} className="px-3 py-1 border rounded hover:bg-slate-400 text-white">
        Pending
      </button>
      <button onClick={() => setFilter("completed")} className="px-3 py-1 border rounded hover:bg-slate-400  text-white">
        Completed
      </button>
    </div>
  );
};

export default Filters;