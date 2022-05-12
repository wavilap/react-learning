import {
  ADD_TASK,
  REMOVE_TASK,
  REMOVE_ALL
} from './actions';

function taskReducer (state, action) { // state => []
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return []; // por hacer
    case REMOVE_ALL:
      return [];
    default:
      break;
  }
};

export default taskReducer;