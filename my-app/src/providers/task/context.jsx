import React, { useEffect, useReducer } from 'react';
import taskReducer from './reducer';

export const TasksContext = React.createContext(null);

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const data = localStorage.getItem('tasks');
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
