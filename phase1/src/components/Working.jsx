import React, { useState } from 'react';

const Working = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addContent = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  };

  const removeContent = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };

  return (
    <>
      <div className="heading">
        <h1>Todo List</h1>
      </div>

      <div className="info">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button className='add' onClick={addContent}>
          Add
        </button>
      </div>

      <ul className="todo-list">
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeContent(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Working;
