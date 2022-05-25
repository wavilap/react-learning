import {
  ADD_TASK,
  CHANGE_STATE,
  REMOVE_TASK,
  REMOVE_ALL
} from './actions';

function taskReducer (state, action) { // state => []
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case CHANGE_STATE:
      const copyState = [...state]; // copia del estado actual
      const { id, stateId } = action.payload;
      const index = copyState.findIndex((task) => task.id === id);
      copyState[index].stateId = stateId;

      return copyState;
    case REMOVE_TASK:
      return []; // por hacer
    case REMOVE_ALL:
      return [];
    default:
      break;
  }
};

export default taskReducer;