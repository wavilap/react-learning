import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import React, { useId ,useContext, useState } from 'react';
import { TasksContext } from '../providers/task/context';
import { ADD_TASK, CHANGE_STATE, REMOVE_ALL } from '../providers/task/actions';

const TaskItem = styled.li`
  font-size: 18px;
  opacity: ${(props) => props.completed ? '0.5' : '1'};
  text-decoration: ${(props) => props.completed ? 'line-through' : 'initial'};
`;

function Todo() {
  // const id = useId();
  const { tasks, dispatch } = useContext(TasksContext);
  const [inputValue, setInputValue] = useState('');

  console.log({tasks});

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleRemoveAll = () => {
    dispatch({
      type: REMOVE_ALL,
    });
  };

  const handleClick = (task) => {
    dispatch({
      type: CHANGE_STATE,
      payload: {
        ...task,
        stateId: (task.stateId === 1) ? 2 : 1,
      }
    })
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      // setTasks([...tasks, inputValue]); // ADD_TASK
      dispatch({
        type: ADD_TASK,
        payload: {
          id: uuidv4(),
          name: inputValue,
          stateId: 1, // 1: pendiente, 2: completado
        },
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
          <TaskItem
            key={task.id}
            completed={task.stateId === 2}
            onClick={() => handleClick(task)}
          >
            {task.name}
          </TaskItem>
        ))}
      </ul>
      <button onClick={handleRemoveAll}>
        Elimar todas las tareas
      </button>
    </div>
  );
}

export default Todo;