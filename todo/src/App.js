import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="text-center">Simple To-Do Application</h1>
        <div className="container">
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
