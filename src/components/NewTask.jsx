import { useState } from 'react';

function NewTask({ onAddTask }) {
  const [task, setTask] = useState('');

  function handleClick() {
    if (task.trim() === '') {
      return;
    }

    onAddTask(task);
    setTask('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleClick}
        className='text-stone-700 hover:text-slate-950'>
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
