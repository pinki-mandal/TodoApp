import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className={`list-group-item d-flex align-items-center ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          <span className="task-text">{task.text}</span>
          <button className="btn btn-danger ml-auto" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
