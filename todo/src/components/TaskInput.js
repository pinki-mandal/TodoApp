import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task"
          value={taskText}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskInput;
