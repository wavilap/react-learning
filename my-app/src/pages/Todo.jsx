import React, { useContext, useState } from 'react';
import { TasksContext } from '../providers/task/context';
import { ADD_TASK, REMOVE_ALL } from '../providers/task/actions';

function Todo() {
  const { tasks, dispatch } = useContext(TasksContext);
  const [inputValue, setInputValue] = useState('');
  // const [tasks, setTasks] = useState([]);

  console.log({tasks});

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value)
  };

  const handleRemoveAll = () => {
    dispatch({
      type: REMOVE_ALL,
    });
  };  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      // setTasks([...tasks, inputValue]); // ADD_TASK
      dispatch({
        type: ADD_TASK,
        payload: inputValue,
      });
      setInputValue('');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          placeholder='Ingresar una tarea'
          onChange={handleChange}
        />
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task}>
            {task}
          </li>
        ))}
      </ul>
      <button onClick={handleRemoveAll}>
        Elimar todas las tareas
      </button>
    </div>
  );
}

export default Todo;